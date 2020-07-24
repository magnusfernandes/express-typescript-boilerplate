"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewOrder = void 0;
const models_1 = require("../../../models");
const errors_1 = require("../../../errors");
exports.createNewOrder = (requestBody, targetRestaurant) => __awaiter(void 0, void 0, void 0, function* () {
    _validateRequest(requestBody);
    const { price, total, particulars, comments, customerId } = requestBody;
    let transaction = yield models_1.dbConfig.transaction();
    let order;
    let customer = yield models_1.User.findOne({
        where: {
            id: customerId
        }
    });
    if (!customer) {
        transaction.rollback();
        throw new errors_1.ResourceNotFoundError('Customer');
    }
    try {
        order = yield targetRestaurant.createOrder({ price, total, comments, customerId }, { transaction });
    }
    catch (err) {
        transaction.rollback();
        throw err;
    }
    if (!order) {
        yield transaction.rollback();
        throw new errors_1.BadRequestError("There was an error!");
    }
    console.log("Order ID: ", order.id);
    let orderParticulars = [];
    try {
        for (let i = 0; i < particulars.length; i++) {
            const { itemId, quantity, price } = particulars[i];
            let particular = yield order.createParticular({
                itemId,
                quantity,
                price
            }, { transaction });
            orderParticulars.push({
                id: particular.id,
                quantity: particular.quantity,
                price: particular.price,
                item: yield particular.getItem({
                    attributes: {
                        exclude: ['categoryId', 'restaurantId', 'createdAt', 'updatedAt']
                    },
                    include: [
                        {
                            model: models_1.RestaurantCategory,
                            as: 'category',
                            attributes: ['id', 'name']
                        }
                    ]
                })
            });
        }
    }
    catch (err) {
        transaction.rollback();
        throw err;
    }
    transaction.commit();
    return Promise.resolve({
        order: {
            id: order.id,
            price: order.price,
            total: order.total,
            particulars: orderParticulars
        }
    });
});
const _validateRequest = (request) => {
    if (!request.price) {
        throw new errors_1.BadRequestError("Missing price attribute");
    }
    if (!request.total) {
        throw new errors_1.BadRequestError("Missing total attribute");
    }
    if (!request.customerId) {
        throw new errors_1.BadRequestError("Missing customerId attribute");
    }
    if (!(request.particulars && request.particulars.length > 0)) {
        throw new errors_1.BadRequestError("Missing particulars attribute");
    }
};

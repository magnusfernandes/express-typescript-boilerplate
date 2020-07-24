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
exports.getAllOrders = void 0;
const models_1 = require("../../models");
const errors_1 = require("../../errors");
exports.getAllOrders = (currentUser, requestBody) => __awaiter(void 0, void 0, void 0, function* () {
    if (currentUser.role != 'superadmin') {
        throw new errors_1.NotAuthorizedError("You're not authorized to perform this function.");
    }
    let whereObj = {};
    if (requestBody.restaurantId) {
        whereObj.restaurantId = requestBody.restaurantId;
    }
    let orders = yield models_1.Order.findAll({
        where: whereObj,
        attributes: {
            exclude: ['restaurantId', 'customerId', 'updatedAt']
        },
        include: [
            {
                model: models_1.Restaurant,
                as: 'restaurant',
                attributes: ['id', 'name', 'phone']
            },
            {
                model: models_1.User,
                as: 'customer',
                attributes: ['id', 'name', 'phone']
            }
        ]
    });
    return Promise.resolve({
        orders
    });
});

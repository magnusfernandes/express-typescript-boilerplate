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
exports.createItems = void 0;
const models_1 = require("../../../models");
const errors_1 = require("../../../errors");
exports.createItems = (currentUser, targetRestaurant, requestBody) => __awaiter(void 0, void 0, void 0, function* () {
    if (currentUser.role !== 'superadmin') {
        throw new errors_1.NotAuthorizedError("You're not authorized to perform this function.");
    }
    _validateRequest(requestBody);
    const { categories } = requestBody;
    let transaction = yield models_1.dbConfig.transaction();
    let restaurantCategories = [];
    try {
        for (let i = 0; i < categories.length; i++) {
            _validateCategory(categories[i]);
            const { id, items } = categories[i];
            let category = yield models_1.RestaurantCategory.findOne({
                where: {
                    id
                }
            });
            if (!category) {
                throw new errors_1.ResourceNotFoundError('Category');
            }
            let restaurantItems = [];
            for (let j = 0; j < items.length; j++) {
                const { name, price, isVeg } = items[i];
                let item = yield targetRestaurant.createItem({
                    name,
                    price,
                    isVeg,
                    categoryId: category.id
                });
                restaurantItems.push({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    isVeg: item.isVeg,
                    category: {
                        id: category.id,
                        name: category.name
                    }
                });
            }
            restaurantCategories.push({
                id: category.id,
                name: category.name,
                items: restaurantItems
            });
        }
    }
    catch (err) {
        transaction.rollback();
        throw err;
    }
    transaction.commit();
    return Promise.resolve({
        categories: restaurantCategories
    });
});
const _validateRequest = (request) => {
    if (!(request.categories && request.categories.length > 0)) {
        throw new errors_1.BadRequestError("Missing categories attribute");
    }
};
const _validateCategory = (request) => {
    if (!request.id) {
        throw new errors_1.BadRequestError("Missing id attribute");
    }
    if (!request.items) {
        throw new errors_1.BadRequestError("Missing items attribute");
    }
};
const _validateItem = (request) => {
    if (!request.name) {
        throw new errors_1.BadRequestError("Missing name attribute");
    }
    if (!request.price) {
        throw new errors_1.BadRequestError("Missing price attribute");
    }
    if (!request.isVeg) {
        throw new errors_1.BadRequestError("Missing isVeg attribute");
    }
    if (!request.categoryId) {
        throw new errors_1.BadRequestError("Missing categoryId attribute");
    }
};

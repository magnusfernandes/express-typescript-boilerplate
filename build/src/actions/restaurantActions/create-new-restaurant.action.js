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
exports.createNewRestaurant = void 0;
const errors_1 = require("../../errors");
const models_1 = require("../../models");
exports.createNewRestaurant = (requestBody, currentUser) => __awaiter(void 0, void 0, void 0, function* () {
    if (currentUser.role != 'superadmin') {
        throw new errors_1.NotAuthorizedError("You're not authorized to perform this function.");
    }
    _validateRequest(requestBody);
    let { name, phone, city, managerId } = requestBody;
    if (phone.length == 10) {
        phone = `+91${phone}`;
    }
    let restaurant = yield models_1.Restaurant.findOne({
        where: {
            phone
        }
    });
    if (restaurant) {
        throw new errors_1.BadRequestError("Restaurant with this phone number already exists.");
    }
    let manager = yield models_1.User.findOne({
        where: {
            id: managerId,
            role: 'manager'
        }
    });
    if (!manager) {
        throw new errors_1.ResourceNotFoundError("Manager");
    }
    restaurant = yield models_1.Restaurant.create({ name, phone, city, managerId });
    let payload = {
        id: restaurant.id,
        name: restaurant.name,
        phone: restaurant.phone,
        city: restaurant.city,
        location: restaurant.location,
        status: restaurant.status,
        manager: {
            id: manager.id,
            name: manager.name,
            phone: manager.phone
        }
    };
    return Promise.resolve({
        restaurant: payload
    });
});
const _validateRequest = (request) => {
    if (!request.name) {
        throw new errors_1.BadRequestError("Missing name attribute");
    }
    if (!request.phone) {
        throw new errors_1.BadRequestError("Missing phone attribute");
    }
    if (!request.city) {
        throw new errors_1.BadRequestError("Missing city attribute");
    }
    if (!request.managerId) {
        throw new errors_1.BadRequestError("Missing managerId attribute");
    }
};

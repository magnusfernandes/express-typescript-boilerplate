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
exports.updateRestaurant = void 0;
const models_1 = require("../../models");
const errors_1 = require("../../errors");
exports.updateRestaurant = (currentUser, targetRestaurant, requestBody) => __awaiter(void 0, void 0, void 0, function* () {
    _validateRequest(requestBody);
    const { name, phone, location, city, status, avgCost, avgDrinkCost } = requestBody;
    let restaurant = yield models_1.Restaurant.findOne({
        where: {
            phone
        }
    });
    if (restaurant && restaurant.id !== targetRestaurant.id) {
        throw new errors_1.BadRequestError("Restaurant with phone already exists!");
    }
    targetRestaurant.name = name;
    targetRestaurant.phone = phone;
    if (phone.length == 10) {
        targetRestaurant.phone = `+91${phone}`;
    }
    targetRestaurant.city = city;
    targetRestaurant.status = status;
    if (avgCost) {
        targetRestaurant.avgCost = avgCost;
    }
    if (avgDrinkCost) {
        targetRestaurant.avgDrinkCost = avgDrinkCost;
    }
    if (location) {
        targetRestaurant.location = location;
    }
    yield targetRestaurant.save();
    return Promise.resolve({
        restaurant: {
            id: targetRestaurant.id,
            name: targetRestaurant.name,
            city: targetRestaurant.city,
            phone: targetRestaurant.phone,
            status: targetRestaurant.status,
            location: targetRestaurant.location,
            avgCost: targetRestaurant.avgCost,
            avgDrinkCost: targetRestaurant.avgDrinkCost
        }
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
    if (!request.status) {
        throw new errors_1.BadRequestError("Missing status attribute");
    }
};

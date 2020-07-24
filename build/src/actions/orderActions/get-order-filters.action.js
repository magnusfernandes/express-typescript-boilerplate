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
exports.getOrderFilters = void 0;
const models_1 = require("../../models");
const errors_1 = require("../../errors");
exports.getOrderFilters = (currentUser) => __awaiter(void 0, void 0, void 0, function* () {
    if (currentUser.role != 'superadmin') {
        throw new errors_1.NotAuthorizedError("You're not authorized to perform this function.");
    }
    let payload = {};
    payload.restaurants = yield models_1.Restaurant.findAll({
        attributes: ['id', 'name']
    });
    payload.customers = yield models_1.User.findAll({
        attributes: ['id', 'name'],
        where: {
            role: 'end_user'
        }
    });
    return Promise.resolve(payload);
});

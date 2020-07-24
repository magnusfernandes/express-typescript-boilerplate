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
const errors_1 = require("../../../errors");
exports.getAllOrders = (currentUser, targetRestaurant) => __awaiter(void 0, void 0, void 0, function* () {
    if (currentUser.role !== 'superadmin') {
        throw new errors_1.NotAuthorizedError("You're not authorized to perform this function.");
    }
    let orders = yield targetRestaurant.getOrders({
        attributes: {
            exclude: ['restaurantId', 'updatedAt']
        }
    });
    let payload = {
        orders: []
    };
    for (let i = 0; i < orders.length; i++) {
        const { id, price, total, status, comments } = orders[i];
        payload.orders.push({
            id, price, total, status, comments,
            particulars: yield orders[i].getParticulars({
                attributes: {
                    exclude: ['orderId', 'createdAt', 'updatedAt']
                }
            })
        });
    }
    return Promise.resolve(payload);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantOrderActions = void 0;
const create_new_order_action_1 = require("./create-new-order.action");
const get_all_orders_action_1 = require("./get-all-orders.action");
const RestaurantOrderActions = {
    createNewOrder: create_new_order_action_1.createNewOrder,
    getAllOrders: get_all_orders_action_1.getAllOrders
};
exports.RestaurantOrderActions = RestaurantOrderActions;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderActions = void 0;
const get_all_orders_action_1 = require("./get-all-orders.action");
const get_order_filters_action_1 = require("./get-order-filters.action");
const OrderActions = {
    getAllOrders: get_all_orders_action_1.getAllOrders,
    getOrderFilters: get_order_filters_action_1.getOrderFilters
};
exports.OrderActions = OrderActions;

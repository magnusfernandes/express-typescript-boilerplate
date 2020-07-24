"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantItemActions = void 0;
const get_all_items_action_1 = require("./get-all-items.action");
const create_items_action_1 = require("./create-items.action");
const RestaurantItemActions = {
    getAllItems: get_all_items_action_1.getAllItems,
    createItems: create_items_action_1.createItems
};
exports.RestaurantItemActions = RestaurantItemActions;

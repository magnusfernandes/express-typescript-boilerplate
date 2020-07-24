"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantTableActions = void 0;
const add_restaurant_tables_action_1 = require("./add-restaurant-tables.action");
const delete_restaurant_table_action_1 = require("./delete-restaurant-table.action");
const get_restaurant_tables_action_1 = require("./get-restaurant-tables.action");
const RestaurantTableActions = {
    addRestaurantTables: add_restaurant_tables_action_1.addRestaurantTables,
    deleteRestaurantTable: delete_restaurant_table_action_1.deleteRestaurantTable,
    getRestaurantTables: get_restaurant_tables_action_1.getRestaurantTables
};
exports.RestaurantTableActions = RestaurantTableActions;

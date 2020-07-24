"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantActions = void 0;
const tableActions_1 = require("./tableActions");
const itemActions_1 = require("./itemActions");
const orderActions_1 = require("./orderActions");
const create_new_restaurant_action_1 = require("./create-new-restaurant.action");
const get_restaurant_action_1 = require("./get-restaurant.action");
const get_restaurants_list_action_1 = require("./get-restaurants-list.action");
const delete_restaurant_action_1 = require("./delete-restaurant.action");
const update_restaurant_action_1 = require("./update-restaurant.action");
const RestaurantActions = Object.assign(Object.assign(Object.assign({ createNewRestaurant: create_new_restaurant_action_1.createNewRestaurant,
    getRestaurant: get_restaurant_action_1.getRestaurant,
    getRestaurantsList: get_restaurants_list_action_1.getRestaurantsList,
    deleteRestaurant: delete_restaurant_action_1.deleteRestaurant,
    updateRestaurant: update_restaurant_action_1.updateRestaurant }, tableActions_1.RestaurantTableActions), itemActions_1.RestaurantItemActions), orderActions_1.RestaurantOrderActions);
exports.RestaurantActions = RestaurantActions;

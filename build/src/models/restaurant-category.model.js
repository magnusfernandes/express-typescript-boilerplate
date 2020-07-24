"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantCategoryFactory = exports.RestaurantCategoryModel = void 0;
const sequelize_1 = require("sequelize");
class RestaurantCategoryModel extends sequelize_1.Model {
}
exports.RestaurantCategoryModel = RestaurantCategoryModel;
function RestaurantCategoryFactory(config) {
    return config.define("restaurantCategories", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        }
    });
}
exports.RestaurantCategoryFactory = RestaurantCategoryFactory;
;

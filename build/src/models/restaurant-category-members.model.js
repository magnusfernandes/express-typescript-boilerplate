"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantCategoryMembersFactory = exports.RestaurantCategoryMembersModel = void 0;
const sequelize_1 = require("sequelize");
class RestaurantCategoryMembersModel extends sequelize_1.Model {
}
exports.RestaurantCategoryMembersModel = RestaurantCategoryMembersModel;
function RestaurantCategoryMembersFactory(config) {
    return config.define("restaurantCategoryMembers", {
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        restaurantId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "restaurants",
                key: "id"
            }
        },
        categoryId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "restaurantCategories",
                key: "id"
            }
        }
    });
}
exports.RestaurantCategoryMembersFactory = RestaurantCategoryMembersFactory;
;

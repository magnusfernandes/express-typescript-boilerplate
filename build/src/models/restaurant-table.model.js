"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantTableFactory = exports.RestaurantTableModel = void 0;
const sequelize_1 = require("sequelize");
class RestaurantTableModel extends sequelize_1.Model {
}
exports.RestaurantTableModel = RestaurantTableModel;
function RestaurantTableFactory(config) {
    return config.define("restaurantTables", {
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        restaurantId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        nickname: {
            type: sequelize_1.DataTypes.STRING(128),
        },
        code: {
            type: sequelize_1.DataTypes.STRING(6),
            allowNull: false,
        },
        status: sequelize_1.DataTypes.STRING(20)
    });
}
exports.RestaurantTableFactory = RestaurantTableFactory;
;

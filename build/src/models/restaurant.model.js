"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantFactory = exports.RestaurantModel = void 0;
const sequelize_1 = require("sequelize");
class RestaurantModel extends sequelize_1.Model {
}
exports.RestaurantModel = RestaurantModel;
function RestaurantFactory(config) {
    return config.define("restaurants", {
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        managerId: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: false,
            references: {
                key: 'id',
                model: 'users'
            }
        },
        name: {
            type: sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        phone: {
            type: sequelize_1.DataTypes.STRING(20)
        },
        location: {
            type: sequelize_1.DataTypes.GEOGRAPHY('POINT')
        },
        city: {
            type: sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            defaultValue: 'running'
        },
        avgCost: sequelize_1.DataTypes.INTEGER,
        avgDrinkCost: sequelize_1.DataTypes.INTEGER
    });
}
exports.RestaurantFactory = RestaurantFactory;
;

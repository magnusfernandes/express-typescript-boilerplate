"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFactory = exports.OrderModel = void 0;
const sequelize_1 = require("sequelize");
class OrderModel extends sequelize_1.Model {
}
exports.OrderModel = OrderModel;
function OrderFactory(config) {
    return config.define("orders", {
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        restaurantId: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'restaurants',
                key: 'id'
            }
        },
        customerId: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        price: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        total: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        status: {
            type: sequelize_1.DataTypes.STRING(20),
            defaultValue: 'new'
        },
        comments: {
            type: sequelize_1.DataTypes.STRING(255)
        }
    });
}
exports.OrderFactory = OrderFactory;
;

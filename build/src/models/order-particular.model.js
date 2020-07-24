"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderParticularFactory = exports.OrderParticularModel = void 0;
const sequelize_1 = require("sequelize");
class OrderParticularModel extends sequelize_1.Model {
}
exports.OrderParticularModel = OrderParticularModel;
function OrderParticularFactory(config) {
    return config.define("orderParticulars", {
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        orderId: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'orders',
                key: 'id'
            }
        },
        itemId: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'items',
                key: 'id'
            }
        },
        quantity: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        price: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        }
    });
}
exports.OrderParticularFactory = OrderParticularFactory;
;

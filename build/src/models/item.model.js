"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemFactory = exports.ItemModel = void 0;
const sequelize_1 = require("sequelize");
class ItemModel extends sequelize_1.Model {
}
exports.ItemModel = ItemModel;
function ItemFactory(config) {
    return config.define("items", {
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        price: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        isVeg: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false
        },
        categoryId: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: "restaurantCategories",
                key: "id"
            }
        },
        restaurantId: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: "restaurants",
                key: "id"
            }
        }
    });
}
exports.ItemFactory = ItemFactory;
;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantFactory = exports.Restaurant = void 0;
var sequelize_1 = require("sequelize");
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Restaurant;
}(sequelize_1.Model));
exports.Restaurant = Restaurant;
function RestaurantFactory(config) {
    return config.define("restaurants", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        managerId: {
            type: new sequelize_1.DataTypes.BIGINT,
            allowNull: false,
            references: {
                key: 'id',
                model: 'users'
            }
        },
        name: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        phone: {
            type: new sequelize_1.DataTypes.STRING(20)
        },
        location: {
            type: new sequelize_1.DataTypes.GEOGRAPHY('POINT')
        },
        city: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        status: {
            type: new sequelize_1.DataTypes.STRING,
            allowNull: false,
            defaultValue: 'running'
        },
        avgCost: new sequelize_1.DataTypes.INTEGER,
        avgDrinkCost: new sequelize_1.DataTypes.INTEGER
    });
}
exports.RestaurantFactory = RestaurantFactory;
;

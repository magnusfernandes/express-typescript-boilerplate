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
exports.RestaurantTableFactory = exports.RestaurantTable = void 0;
var sequelize_1 = require("sequelize");
var RestaurantTable = /** @class */ (function (_super) {
    __extends(RestaurantTable, _super);
    function RestaurantTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RestaurantTable;
}(sequelize_1.Model));
exports.RestaurantTable = RestaurantTable;
function RestaurantTableFactory(config) {
    return config.define("restaurantTables", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        restaurantId: {
            type: new sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        nickname: {
            type: new sequelize_1.DataTypes.STRING(128),
        },
        code: {
            type: new sequelize_1.DataTypes.STRING(6),
            allowNull: false,
        },
        status: new sequelize_1.DataTypes.STRING(20)
    });
}
exports.RestaurantTableFactory = RestaurantTableFactory;
;

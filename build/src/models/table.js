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
exports.TableFactory = exports.Table = void 0;
var sequelize_1 = require("sequelize");
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Table;
}(sequelize_1.Model));
exports.Table = Table;
function TableFactory(config) {
    return config.define("tables", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        restaurantId: {
            type: new sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        code: {
            type: new sequelize_1.DataTypes.STRING(6),
            allowNull: false,
        },
        status: new sequelize_1.DataTypes.STRING(20)
    });
}
exports.TableFactory = TableFactory;
;

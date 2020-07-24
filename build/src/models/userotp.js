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
exports.UserOtpFactory = exports.UserOtp = void 0;
var sequelize_1 = require("sequelize");
var UserOtp = /** @class */ (function (_super) {
    __extends(UserOtp, _super);
    function UserOtp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserOtp;
}(sequelize_1.Model));
exports.UserOtp = UserOtp;
function UserOtpFactory(config) {
    return config.define("userOtps", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: new sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        code: {
            type: new sequelize_1.DataTypes.STRING(6),
            allowNull: false,
        },
        retries: new sequelize_1.DataTypes.INTEGER,
        sentAt: new sequelize_1.DataTypes.DATE,
        usedAt: new sequelize_1.DataTypes.DATE
    });
}
exports.UserOtpFactory = UserOtpFactory;
;

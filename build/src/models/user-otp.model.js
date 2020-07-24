"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOtpFactory = exports.UserOtpModel = void 0;
const sequelize_1 = require("sequelize");
class UserOtpModel extends sequelize_1.Model {
}
exports.UserOtpModel = UserOtpModel;
function UserOtpFactory(config) {
    return config.define("userOtps", {
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        code: {
            type: sequelize_1.DataTypes.STRING(6),
            allowNull: false,
        },
        retries: sequelize_1.DataTypes.INTEGER,
        sentAt: sequelize_1.DataTypes.DATE,
        usedAt: sequelize_1.DataTypes.DATE
    });
}
exports.UserOtpFactory = UserOtpFactory;
;

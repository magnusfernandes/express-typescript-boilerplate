"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = exports.UserModel = void 0;
const sequelize_1 = require("sequelize");
class UserModel extends sequelize_1.Model {
}
exports.UserModel = UserModel;
function UserFactory(config) {
    return config.define("users", {
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        email: {
            type: sequelize_1.DataTypes.STRING(128),
            allowNull: true,
        },
        phone: {
            type: sequelize_1.DataTypes.STRING(128),
            allowNull: true,
        },
        role: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(128),
            defaultValue: 'end_user'
        },
        profilePic: sequelize_1.DataTypes.STRING(128),
        passwordHash: sequelize_1.DataTypes.STRING(128),
        address: sequelize_1.DataTypes.TEXT,
    });
}
exports.UserFactory = UserFactory;
;

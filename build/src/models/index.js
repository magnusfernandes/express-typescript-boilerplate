"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOtpModel = exports.UserModel = exports.UserOtp = exports.User = exports.dbConfig = void 0;
const sequelize_1 = require("sequelize");
const database_json_1 = __importDefault(require("../config/database.json"));
const user_model_1 = require("./user.model");
Object.defineProperty(exports, "UserModel", { enumerable: true, get: function () { return user_model_1.UserModel; } });
const user_otp_model_1 = require("./user-otp.model");
Object.defineProperty(exports, "UserOtpModel", { enumerable: true, get: function () { return user_otp_model_1.UserOtpModel; } });
const env = process.env.NODE_ENV || 'development';
const db = database_json_1.default;
const config = db[env];
exports.dbConfig = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
exports.User = user_model_1.UserFactory(exports.dbConfig);
exports.UserOtp = user_otp_model_1.UserOtpFactory(exports.dbConfig);
exports.User.hasMany(exports.UserOtp, {
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'otps'
});
exports.UserOtp.belongsTo(exports.User, {
    targetKey: 'id'
});

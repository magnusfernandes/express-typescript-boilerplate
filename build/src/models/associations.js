"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userOtpAssociations = exports.userAssociations = void 0;
var user_1 = require("./user");
var userotp_1 = require("./userotp");
// User associations
exports.userAssociations = function () {
    user_1.User.hasMany(userotp_1.UserOtp, {
        sourceKey: 'id',
        foreignKey: 'userId',
        as: 'otps'
    });
};
// UserOtp associations
exports.userOtpAssociations = function () {
    userotp_1.UserOtp.belongsTo(user_1.User, {
        targetKey: 'id'
    });
};

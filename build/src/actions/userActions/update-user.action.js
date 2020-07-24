"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const models_1 = require("../../models");
const errors_1 = require("../../errors");
exports.updateUser = (currentUser, targetUser, requestBody) => __awaiter(void 0, void 0, void 0, function* () {
    _validateRequest(requestBody);
    const { name, email, phone, role, address } = requestBody;
    let user = yield models_1.User.findOne({
        where: {
            phone
        }
    });
    if (user && user.id !== targetUser.id) {
        throw new errors_1.BadRequestError("User with phone already exists!");
    }
    user = yield models_1.User.findOne({
        where: {
            email
        }
    });
    if (user && user.id !== targetUser.id) {
        throw new errors_1.BadRequestError("User with email already exists!");
    }
    targetUser.name = name;
    targetUser.email = email;
    targetUser.phone = phone;
    targetUser.role = role;
    targetUser.address = address;
    yield targetUser.save();
    return Promise.resolve({
        user: {
            id: targetUser.id,
            name: targetUser.name,
            email: targetUser.email,
            phone: targetUser.phone,
            profilePic: targetUser.profilePic,
            role: targetUser.role
        }
    });
});
const _validateRequest = (request) => {
    if (!request.name) {
        throw new errors_1.BadRequestError("Missing name attribute");
    }
    if (!request.phone) {
        throw new errors_1.BadRequestError("Missing phone attribute");
    }
    if (!request.email) {
        throw new errors_1.BadRequestError("Missing email attribute");
    }
    if (!request.role) {
        throw new errors_1.BadRequestError("Missing role attribute");
    }
};

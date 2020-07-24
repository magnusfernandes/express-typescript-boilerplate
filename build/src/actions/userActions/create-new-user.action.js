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
exports.createNewUser = void 0;
const models_1 = require("../../models");
const errors_1 = require("../../errors");
exports.createNewUser = (currentUser, requestBody) => __awaiter(void 0, void 0, void 0, function* () {
    if (currentUser.role != 'superadmin') {
        throw new errors_1.NotAuthorizedError("You're not authorized to perform this function.");
    }
    _validateRequest(requestBody);
    const { name, email, phone, role } = requestBody;
    let user = yield models_1.User.findOne({
        where: {
            phone
        }
    });
    if (user) {
        throw new errors_1.BadRequestError("User with phone already exists!");
    }
    user = yield models_1.User.findOne({
        where: {
            email
        }
    });
    if (user) {
        throw new errors_1.BadRequestError("User with email already exists!");
    }
    user = yield models_1.User.create({
        name, email, phone, role
    });
    if (!user) {
        throw new errors_1.BadRequestError("There was an error!");
    }
    return Promise.resolve({
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            profilePic: user.profilePic,
            role: user.role
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

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
exports.signup = void 0;
const errors_1 = require("../../errors");
const models_1 = require("../../models");
exports.signup = (requestBody) => __awaiter(void 0, void 0, void 0, function* () {
    _validateRequest(requestBody);
    let user = yield models_1.User.findOne({
        where: {
            email: requestBody.email
        }
    });
    if (user) {
        throw new errors_1.BadRequestError('This user email already exists!');
    }
    user = yield models_1.User.findOne({
        where: {
            phone: requestBody.phone
        }
    });
    if (user) {
        throw new errors_1.BadRequestError('This user phone already exists!');
    }
    user = yield _createUser(requestBody);
    return Promise.resolve({
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone
        }
    });
});
const _createUser = (request) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phone } = request;
    return yield models_1.User.create({
        name,
        email,
        phone
    });
});
const _validateRequest = (request) => {
    if (!request.name) {
        throw new errors_1.BadRequestError("Missing name attribute");
    }
    if (!request.email) {
        throw new errors_1.BadRequestError("Missing email attribute");
    }
    if (!request.phone) {
        throw new errors_1.BadRequestError("Missing phone attribute");
    }
    // if (!request.password) {
    //   throw new BadRequestError("Missing password attribute");
    // }
};

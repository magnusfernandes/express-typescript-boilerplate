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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = void 0;
const errors_1 = require("../../errors");
const models_1 = require("../../models");
const moment_1 = __importDefault(require("moment"));
exports.signin = (requestBody) => __awaiter(void 0, void 0, void 0, function* () {
    _validateRequest(requestBody);
    const { phone } = requestBody;
    let user = yield models_1.User.findOne({
        where: {
            phone
        }
    });
    if (!user) {
        throw new errors_1.ResourceNotFoundError('User');
    }
    if (user) {
        let otp = yield user.createOtp({
            code: '331030'
        });
        if (otp) {
            console.log("OTP: ", otp.code);
            otp.sentAt = moment_1.default().toDate();
            yield otp.save();
        }
    }
    return Promise.resolve(`OTP was sent to your phone.`);
});
const _validateRequest = (request) => {
    if (!request.phone) {
        throw new errors_1.BadRequestError("Missing phone attribute");
    }
};

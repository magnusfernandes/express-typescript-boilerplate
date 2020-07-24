"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.verifyOtp = void 0;
const moment_1 = __importDefault(require("moment"));
const jwt = __importStar(require("jsonwebtoken"));
const errors_1 = require("../../errors");
const models_1 = require("../../models");
const config_1 = __importDefault(require("../../../config"));
exports.verifyOtp = (requestBody) => __awaiter(void 0, void 0, void 0, function* () {
    _validateRequest(requestBody);
    const { phone, code } = requestBody;
    let user = yield models_1.User.findOne({
        where: {
            phone
        }
    });
    if (!user) {
        throw new errors_1.BadRequestError("Please check phone number entered!");
    }
    let otps = yield user.getOtps({
        where: {
            code
        },
        order: [
            ['createdAt', 'DESC']
        ]
    });
    if (otps.length == 0) {
        throw new errors_1.BadRequestError("OTP entrered was incorrect!");
    }
    if (otps[0].sentAt && moment_1.default().diff(moment_1.default(otps[0].sentAt), 'seconds') > 300) {
        throw new errors_1.BadRequestError("OTP has expired!");
    }
    let jwtPayload = {
        id: user.id
    };
    let token = jwt.sign(jwtPayload, config_1.default.secret);
    return Promise.resolve({
        token: `JWT ${token}`,
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
    if (!request.phone) {
        throw new errors_1.BadRequestError("Missing phone attribute");
    }
    if (!request.code) {
        throw new errors_1.BadRequestError("Missing code attribute");
    }
};

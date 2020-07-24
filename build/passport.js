"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passport = void 0;
const passport_1 = __importDefault(require("passport"));
exports.passport = passport_1.default;
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const models_1 = require("./src/models");
const config_1 = __importDefault(require("./config"));
const ExtractJwt = passport_jwt_1.default.ExtractJwt;
const JwtStrategy = passport_jwt_1.default.Strategy;
let jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT")
};
jwtOptions.secretOrKey = config_1.default.secret;
const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
    models_1.User.findOne({
        where: {
            id: jwt_payload.id
        }
    }).then((user) => {
        if (user) {
            next(null, user);
        }
        else {
            next(null, false);
        }
    });
});
passport_1.default.use(strategy);

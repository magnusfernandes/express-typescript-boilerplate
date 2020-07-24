"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthActions = void 0;
const signup_action_1 = require("./signup.action");
const signin_action_1 = require("./signin.action");
const verify_otp_action_1 = require("./verify-otp.action");
const AuthActions = {
    signup: signup_action_1.signup,
    signin: signin_action_1.signin,
    verifyOtp: verify_otp_action_1.verifyOtp
};
exports.AuthActions = AuthActions;

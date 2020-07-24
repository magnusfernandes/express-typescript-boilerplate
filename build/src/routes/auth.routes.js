"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const controllers_1 = require("../controllers");
const authRoutes = (app) => {
    app.post('/signup', (req, res) => new controllers_1.AuthController(req, res).signup());
    app.post('/signin', (req, res) => new controllers_1.AuthController(req, res).signin());
    app.post('/verify-otp', (req, res) => new controllers_1.AuthController(req, res).verifyOtp());
};
exports.authRoutes = authRoutes;

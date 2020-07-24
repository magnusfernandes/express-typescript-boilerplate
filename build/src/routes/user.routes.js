"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const controllers_1 = require("../controllers");
const userRoutes = (app, passport) => {
    app.get('/users/get-profile', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.UserController(req, res).getProfile());
    app.post('/users/list', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.UserController(req, res).getAllUsers());
    app.get('/users/:userId', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.UserController(req, res).getSingleUser());
    app.patch('/users/:userId', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.UserController(req, res).updateUser());
    app.delete('/users/:userId', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.UserController(req, res).deleteUser());
    app.post('/users', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.UserController(req, res).createNewUser());
};
exports.userRoutes = userRoutes;

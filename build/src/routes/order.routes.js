"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const controllers_1 = require("../controllers");
const orderRoutes = (app, passport) => {
    app.get('/orders/list/filters', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.OrderController(req, res).getOrderFilters());
    app.post('/orders/list', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.OrderController(req, res).getAllOrders());
};
exports.orderRoutes = orderRoutes;

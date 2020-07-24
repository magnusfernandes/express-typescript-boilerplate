"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardRoutes = void 0;
const controllers_1 = require("../controllers");
const dashboardRoutes = (app, passport) => {
    app.post('/dashboard/superadmin', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.DashboardController(req, res).getSuperadminDashboard());
};
exports.dashboardRoutes = dashboardRoutes;

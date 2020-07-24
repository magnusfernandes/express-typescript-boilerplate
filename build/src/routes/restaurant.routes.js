"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantRoutes = void 0;
const controllers_1 = require("../controllers");
const restaurantRoutes = (app, passport) => {
    app.post('/restaurants/list', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.RestaurantController(req, res).getRestaurantsList());
    app.get('/restaurants/:restaurantId', (req, res) => new controllers_1.RestaurantController(req, res).getRestaurant());
    app.patch('/restaurants/:restaurantId', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.RestaurantController(req, res).updateRestaurant());
    app.delete('/restaurants/:restaurantId', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.RestaurantController(req, res).deleteRestaurant());
    app.post('/restaurants', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.RestaurantController(req, res).createNewRestaurant());
    app.get('/restaurants/:restaurantId/tables', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.RestaurantController(req, res).getRestaurantTables());
    app.post('/restaurants/:restaurantId/tables', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.RestaurantController(req, res).addRestaurantTables());
    app.delete('/restaurants/:restaurantId/tables/:restaurantTableId', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.RestaurantController(req, res).deleteRestaurantTable());
    app.get('/restaurants/:restaurantId/items', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.RestaurantController(req, res).getRestaurantItems());
    app.post('/restaurants/:restaurantId/items', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.RestaurantController(req, res).createItems());
    app.get('/restaurants/:restaurantId/orders', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.RestaurantController(req, res).getAllOrders());
    app.post('/restaurants/:restaurantId/orders', (req, res) => new controllers_1.RestaurantController(req, res).createNewOrders());
};
exports.restaurantRoutes = restaurantRoutes;

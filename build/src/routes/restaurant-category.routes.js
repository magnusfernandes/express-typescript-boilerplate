"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantCategoryRoutes = void 0;
const controllers_1 = require("../controllers");
const restaurantCategoryRoutes = (app, passport) => {
    app.get('/categories', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.RestaurantCategoryController(req, res).getAllCategories());
    app.post('/categories', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.RestaurantCategoryController(req, res).createNewCategory());
    app.delete('/categories/:categoryId', passport.authenticate("jwt", { session: false }), (req, res) => new controllers_1.RestaurantCategoryController(req, res).deleteCategory());
};
exports.restaurantCategoryRoutes = restaurantCategoryRoutes;

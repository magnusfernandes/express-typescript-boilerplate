"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryActions = void 0;
const create_new_category_action_1 = require("./create-new-category.action");
const delete_category_action_1 = require("./delete-category.action");
const get_all_categories_action_1 = require("./get-all-categories.action");
const CategoryActions = {
    createNewCategory: create_new_category_action_1.createNewCategory,
    deleteCategory: delete_category_action_1.deleteCategory,
    getAllCategories: get_all_categories_action_1.getAllCategories
};
exports.CategoryActions = CategoryActions;

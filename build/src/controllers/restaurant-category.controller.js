"use strict";
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
exports.RestaurantCategoryController = void 0;
const base_controller_1 = __importDefault(require("./base.controller"));
const actions_1 = require("../actions");
const models_1 = require("../models");
const errors_1 = require("../errors");
class RestaurantCategoryController extends base_controller_1.default {
    constructor(req, res) {
        super(req, res);
    }
    getAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let respPayload = yield actions_1.CategoryActions.getAllCategories();
                this.respondWithSuccess(respPayload);
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    createNewCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let respPayload = yield actions_1.CategoryActions.createNewCategory(this.currentUser, this.request.body);
                this.respondWithSuccess(respPayload);
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    deleteCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._fetchCategory();
                if (this.targetCategory) {
                    let respPayload = yield actions_1.CategoryActions.deleteCategory(this.currentUser, this.targetCategory);
                    this.respondWithSuccess(respPayload);
                }
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    _fetchCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            let fetchedCategory = yield models_1.RestaurantCategory.findOne({
                where: {
                    id: this.request.params.categoryId
                }
            });
            if (!fetchedCategory) {
                throw new errors_1.ResourceNotFoundError("Category");
            }
            this.targetCategory = fetchedCategory;
        });
    }
}
exports.RestaurantCategoryController = RestaurantCategoryController;
exports.default = RestaurantCategoryController;

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
exports.RestaurantController = void 0;
const base_controller_1 = __importDefault(require("./base.controller"));
const actions_1 = require("../actions");
const models_1 = require("../models");
const errors_1 = require("../errors");
class RestaurantController extends base_controller_1.default {
    constructor(req, res) {
        super(req, res);
    }
    createNewRestaurant() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let respPayload = yield actions_1.RestaurantActions.createNewRestaurant(this.request.body, this.currentUser);
                this.respondWithSuccess(respPayload);
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    getRestaurant() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._fetchRestaurant();
                if (this.fetchedRestaurant) {
                    let respPayload = yield actions_1.RestaurantActions.getRestaurant(this.fetchedRestaurant);
                    this.respondWithSuccess(respPayload);
                }
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    getRestaurantsList() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let respPayload = yield actions_1.RestaurantActions.getRestaurantsList(this.currentUser);
                this.respondWithSuccess(respPayload);
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    updateRestaurant() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._fetchRestaurant();
                if (this.fetchedRestaurant) {
                    let respPayload = yield actions_1.RestaurantActions.updateRestaurant(this.currentUser, this.fetchedRestaurant, this.request.body);
                    this.respondWithSuccess(respPayload);
                }
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    deleteRestaurant() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._fetchRestaurant();
                if (this.fetchedRestaurant) {
                    let respPayload = yield actions_1.RestaurantActions.deleteRestaurant(this.currentUser, this.fetchedRestaurant);
                    this.respondWithSuccess(respPayload);
                }
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    getRestaurantTables() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._fetchRestaurant();
                if (this.fetchedRestaurant) {
                    let respPayload = yield actions_1.RestaurantActions.getRestaurantTables(this.fetchedRestaurant);
                    this.respondWithSuccess(respPayload);
                }
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    addRestaurantTables() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._fetchRestaurant();
                if (this.fetchedRestaurant) {
                    let respPayload = yield actions_1.RestaurantActions.addRestaurantTables(this.request.body, this.currentUser, this.fetchedRestaurant);
                    this.respondWithSuccess(respPayload);
                }
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    deleteRestaurantTable() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._fetchRestaurant();
                if (this.fetchedRestaurant) {
                    let respPayload = yield actions_1.RestaurantActions.deleteRestaurantTable(this.currentUser, this.fetchedRestaurant, this.request.params);
                    this.respondWithSuccess(respPayload);
                }
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    getRestaurantItems() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._fetchRestaurant();
                if (this.fetchedRestaurant) {
                    let respPayload = yield actions_1.RestaurantActions.getAllItems(this.fetchedRestaurant);
                    this.respondWithSuccess(respPayload);
                }
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    createItems() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._fetchRestaurant();
                if (this.fetchedRestaurant) {
                    let respPayload = yield actions_1.RestaurantActions.createItems(this.currentUser, this.fetchedRestaurant, this.request.body);
                    this.respondWithSuccess(respPayload);
                }
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    createNewOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._fetchRestaurant();
                if (this.fetchedRestaurant) {
                    let respPayload = yield actions_1.RestaurantActions.createNewOrder(this.request.body, this.fetchedRestaurant);
                    this.respondWithSuccess(respPayload);
                }
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    getAllOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._fetchRestaurant();
                if (this.fetchedRestaurant) {
                    let respPayload = yield actions_1.RestaurantActions.getAllOrders(this.currentUser, this.fetchedRestaurant);
                    this.respondWithSuccess(respPayload);
                }
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    _fetchRestaurant() {
        return __awaiter(this, void 0, void 0, function* () {
            let fetchedRestaurant = yield models_1.Restaurant.findOne({
                where: {
                    id: this.request.params.restaurantId
                }
            });
            if (!fetchedRestaurant) {
                throw new errors_1.ResourceNotFoundError("Restaurant");
            }
            this.fetchedRestaurant = fetchedRestaurant;
        });
    }
}
exports.RestaurantController = RestaurantController;
exports.default = RestaurantController;

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
exports.OrderController = void 0;
const base_controller_1 = __importDefault(require("./base.controller"));
const actions_1 = require("../actions");
const models_1 = require("../models");
const errors_1 = require("../errors");
class OrderController extends base_controller_1.default {
    constructor(req, res) {
        super(req, res);
    }
    getAllOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let respPayload = yield actions_1.OrderActions.getAllOrders(this.currentUser, this.request.body);
                this.respondWithSuccess(respPayload);
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    getOrderFilters() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let respPayload = yield actions_1.OrderActions.getOrderFilters(this.currentUser);
                this.respondWithSuccess(respPayload);
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    _fetchOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            let fetchedOrder = yield models_1.Order.findOne({
                where: {
                    id: this.request.params.categoryId
                }
            });
            if (!fetchedOrder) {
                throw new errors_1.ResourceNotFoundError("Order");
            }
            this.targetOrder = fetchedOrder;
        });
    }
}
exports.OrderController = OrderController;
exports.default = OrderController;

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
exports.UserController = void 0;
const base_controller_1 = __importDefault(require("./base.controller"));
const actions_1 = require("../actions");
const models_1 = require("../models");
const errors_1 = require("../errors");
class UserController extends base_controller_1.default {
    constructor(req, res) {
        super(req, res);
    }
    getProfile() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let respPayload = yield actions_1.UserActions.getProfile(this.currentUser);
                this.respondWithSuccess(respPayload);
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let respPayload = yield actions_1.UserActions.getAllUsers(this.currentUser, this.request.body);
                this.respondWithSuccess(respPayload);
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    createNewUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let respPayload = yield actions_1.UserActions.createNewUser(this.currentUser, this.request.body);
                this.respondWithSuccess(respPayload);
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    getSingleUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._fetchUser();
                if (this.fetchedUser) {
                    let respPayload = yield actions_1.UserActions.getSingleUser(this.currentUser, this.fetchedUser);
                    this.respondWithSuccess(respPayload);
                }
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    updateUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._fetchUser();
                if (this.fetchedUser) {
                    let respPayload = yield actions_1.UserActions.updateUser(this.currentUser, this.fetchedUser, this.request.body);
                    this.respondWithSuccess(respPayload);
                }
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    deleteUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._fetchUser();
                if (this.fetchedUser) {
                    let respPayload = yield actions_1.UserActions.deleteUser(this.currentUser, this.fetchedUser);
                    this.respondWithSuccess(respPayload);
                }
            }
            catch (err) {
                console.error(err);
                this.respondWithError(err);
            }
        });
    }
    _fetchUser() {
        return __awaiter(this, void 0, void 0, function* () {
            let fetchedUser = yield models_1.User.findOne({
                where: {
                    id: this.request.params.userId
                }
            });
            if (!fetchedUser) {
                throw new errors_1.ResourceNotFoundError("User");
            }
            this.fetchedUser = fetchedUser;
        });
    }
}
exports.UserController = UserController;
exports.default = UserController;

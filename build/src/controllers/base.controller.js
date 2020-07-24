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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const models_2 = require("../models");
const errors_1 = require("../errors");
class BaseController {
    constructor(req, res) {
        this.expressRequest = req;
        this.request = {
            body: req.body,
            params: req.params,
            query: req.query
        };
        this.response = res;
        this.models = models_1.dbConfig;
        this.currentUser = req.user;
    }
    respond(payload, status = 200, headers = null) {
        this.response.status(status).send(payload);
    }
    respondWithError(err) {
        if (err instanceof errors_1.ResourceNotFoundError) {
            this.respond({ type: "error", message: err.message }, 404);
        }
        else if (err instanceof errors_1.BadRequestError) {
            this.respond({ type: "error", message: err.message }, 400);
        }
        else if (err instanceof errors_1.NotAuthorizedError) {
            this.respond({ type: "error", message: err.message }, 403);
        }
        else if (err instanceof errors_1.InternalError) {
            this.respond({ type: "error", message: err.message }, 500);
        }
        else if (err instanceof errors_1.NotAuthenticatedError) {
            this.respond({ type: "error", message: err.message }, 401);
        }
        else {
            this.respond({ type: "error", message: err.message }, 500);
        }
    }
    respondWithSuccess(payload, headers = null) {
        if (headers)
            this.respond({ type: "success", message: payload }, 200, headers);
        this.respond({ type: "success", message: payload }, 200);
    }
    _fetchCurrentUser() {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield models_2.User.findOne({
                where: {
                    email: this.requestingUserEmail
                }
            });
            if (user) {
                this.currentUser = user;
            }
        });
    }
}
exports.default = BaseController;

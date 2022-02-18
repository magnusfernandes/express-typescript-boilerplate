import { Sequelize } from "sequelize";
import { Response, Request } from "express";

import { User } from "../models";
import {
  ResourceNotFoundError,
  BadRequestError,
  NotAuthorizedError,
  InternalError,
  NotAuthenticatedError,
} from "../errors";
import { dbConfig } from "../models/config";

interface CustomRequest {
  body: any;
  params: any;
  query: any;
}

export default class BaseController {
  private expressRequest: Request;
  request: CustomRequest;
  response: Response;
  models: Sequelize;
  currentUser: User;
  private requestingUserEmail: any;

  constructor(req: any, res: any) {
    this.expressRequest = req;
    this.request = {
      body: req.body,
      params: req.params,
      query: req.query,
    };

    this.response = res;
    this.models = dbConfig;
    this.currentUser = req.user;
  }

  respond(payload: any, status = 200, headers = null) {
    this.response.status(status).send(payload);
  }

  respondWithError(err: Error) {
    if (err instanceof ResourceNotFoundError) {
      this.respond({ type: "error", message: err.message }, 404);
    } else if (err instanceof BadRequestError) {
      this.respond({ type: "error", message: err.message }, 400);
    } else if (err instanceof NotAuthorizedError) {
      this.respond({ type: "error", message: err.message }, 403);
    } else if (err instanceof InternalError) {
      this.respond({ type: "error", message: err.message }, 500);
    } else if (err instanceof NotAuthenticatedError) {
      this.respond({ type: "error", message: err.message }, 401);
    } else {
      this.respond({ type: "error", message: err.message }, 500);
    }
  }

  respondWithSuccess(payload: any, headers = null) {
    if (headers)
      this.respond({ type: "success", message: payload }, 200, headers);
    this.respond({ type: "success", message: payload }, 200);
  }

  async _fetchCurrentUser() {
    let user = await User.findOne({
      where: {
        email: this.requestingUserEmail,
      },
    });
    if (user) {
      this.currentUser = user;
    }
  }
}

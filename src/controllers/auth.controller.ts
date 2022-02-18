import BaseController from "./base.controller";
import { AuthActions } from "../actions";

export class AuthController extends BaseController {
  constructor(req: any, res: any) {
    super(req, res);
  }

  async signin() {
    try {
      let respPayload = await AuthActions.signin(this.request.body);
      this.respondWithSuccess(respPayload);
    } catch (err: any) {
      console.error(err);
      this.respondWithError(err);
    }
  }

  async signup() {
    try {
      let respPayload = await AuthActions.signup(this.request.body);
      this.respondWithSuccess(respPayload);
    } catch (err: any) {
      console.error(err);
      this.respondWithError(err);
    }
  }

  async verifyOtp() {
    try {
      let respPayload = await AuthActions.verifyOtp(this.request.body);
      this.respondWithSuccess(respPayload);
    } catch (err: any) {
      console.error(err);
      this.respondWithError(err);
    }
  }
}

export default AuthController;

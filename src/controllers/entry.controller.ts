import BaseController from "./base.controller";
import { EntryActions } from "../actions";

export class EntryController extends BaseController {
  constructor(req: any, res: any) {
    super(req, res);
  }

  async publishEntry() {
    try {
      let respPayload = await EntryActions.publishEntry(this.request.body);
      this.respondWithSuccess(respPayload);
    } catch (err) {
      console.error(err);
      this.respondWithError(err);
    }
  }
}

export default EntryController;

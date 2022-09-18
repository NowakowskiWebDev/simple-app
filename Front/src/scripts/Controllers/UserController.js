import AbstractController from "./AbstractController.js";

class UserController extends AbstractController {
  constructor() {
    super("category");
  }
}

export default new UserController();

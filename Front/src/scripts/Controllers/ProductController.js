import AbstractController from "./AbstractController.js";

class ProductController extends AbstractController {
  constructor() {
    super("category");
  }
}

export default new ProductController();

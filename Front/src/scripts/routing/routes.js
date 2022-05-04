import ProductController from "../controllers/ProductController.js";
import UserController from "../controllers/UserController.js";
import CategoryController from "../controllers/CategoryController.js";

const models = {
  'category': CategoryController,
  'product': ProductController,
  'products': ProductController,
  'user': UserController,
  '404': '404.html'
}

export const routes = (model, id = null) => {

  if (!(model in models)) {
    console.log('test')
    return models['404']
  }

  const modelController = models[model]

  modelController.model = model;

  if (id === null) {
    return modelController.index()
  }

  return modelController.get
};
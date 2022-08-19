// import ProductController from "../controllers/ProductController.js";
// import UserController from "../controllers/UserController.js";
import CategoryView from "../views/category/CategoryView.js";
import ProductView from "../views/product/ProductView.js";
import AccountView from "../views/account/AccountView.js";
import LoginView from "../views/login/LoginView.js";
import NotFoundView from "../views/404/NotFoundView.js";

const views = {
  'categories': CategoryView,
  'category': CategoryView,
  'products': ProductView,
  'product': ProductView,
  'account': AccountView,
  'login': LoginView,
  '404': NotFoundView,
}

export const routes = (viewParam, id = null) => {

  console.log('test')
  if (!(viewParam in views)) {
    return
  }

  const view = views[viewParam]

  // modelController.model = model;
  console.log(view)
  if (id === null) {
    return view.index()
  }

  // return view.get()
};
import CategoryView from "../views/CategoryView.js";
import ProductView from "../views/ProductView.js";
import AccountView from "../views/AccountView.js";
import LoginView from "../views/LoginView.js";
import HomepageView from "../views/HomepageView.js";

export const views = {
  'null':  () => {
    return HomepageView
  },
  'categories': () => {
    CategoryView.setView('index')
    return CategoryView
  }, 
  'category': (id) => {
    CategoryView.setView('get', id)
    return CategoryView
  },
  'products': () => {
    ProductView.setView('index')
    return ProductView
  },
  'product': (id) => { 
    ProductView.setView('get', id)
    return ProductView
  },
  'account': () => {
    AccountView.setView('get')
    return AccountView
  },
  'login': () => {
    LoginView.setView('get')
    return LoginView
  },
}
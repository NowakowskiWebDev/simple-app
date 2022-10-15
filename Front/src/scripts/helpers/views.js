import CategoryView from "../views/CategoryView.js";
import OfferView from "../views/OfferView.js";
// import ProductView from "../views/ProductView.js";
// import AccountView from "../views/AccountView.js";
// import LoginView from "../views/LoginView.js";
import HomepageView from "../views/HomepageView.js";

export const views = {
  'null': HomepageView,
  'categories': CategoryView,
  'category': CategoryView,
  'offers': OfferView,
  'offer': OfferView,
  // 'products': ProductView,
  // 'product': ProductView,
  // 'account': AccountView,
  // 'login': LoginView,
}
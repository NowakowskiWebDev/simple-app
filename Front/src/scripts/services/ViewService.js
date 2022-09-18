import { views } from '../helpers/views.js';
import { parseRequestUrl } from "../helpers/parseUrl.js";

import HomepageView from "../views/HomepageView.js";
import AccountView from "../views/AccountView.js";
import CategoryView from "../views/CategoryView.js";
import LoginView from "../views/LoginView.js";
import NotFoundView from "../views/NotFoundView.js";
import ProductView from "../views/ProductView.js";

class ViewService {
  constructor() {
    this.requestUrl = parseRequestUrl();
    this.view = this.getViewComponent();
  }

  getViewComponent() {
    if (!(this.requestUrl.view in views)) {
      return NotFoundView
    }
    return views[this.requestUrl.view]
  }
  
  changeView() {
    this.requestUrl = parseRequestUrl();
    this.view = this.getViewComponent()
    this.run()
  }

  run() {
    this.view.setViewSelector('#app')
    this.view.render(this.requestUrl.id)
  }
}


export default new ViewService();
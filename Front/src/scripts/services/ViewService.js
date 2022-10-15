import { views } from '../helpers/views.js';
import { parseUrl } from "../helpers/parseUrl.js";

import RoutingService from "./RoutingService";

// import HomepageView from "../views/HomepageView.js";
// import AccountView from "../views/AccountView.js";
// import CategoryView from "../views/CategoryView.js";
// import LoginView from "../views/LoginView.js";
import NotFoundView from "../views/NotFoundView.js";
// import ProductView from "../views/ProductView.js";

class ViewService {
  constructor() {
    this.requestUrl = parseUrl();
    this.view = this.getViewComponent();
  }

  getViewComponent() {
    if (!(this.requestUrl.view in views)) {
      return NotFoundView
    }
    return views[this.requestUrl.view]
  }
  
  changeView() {
    this.requestUrl = parseUrl();
    this.view = this.getViewComponent()
    this.run()
  }

  async run() {
    this.view.id = this.requestUrl.id 
    await this.view.render()
    RoutingService.registerGenericLinksHandler()
  }
}


export default new ViewService();
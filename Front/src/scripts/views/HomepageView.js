import AbstractView from "./AbstractView";

import CategoryController from "../controllers/CategoryController.js";


class HomepageView extends AbstractView {
  render() {
    let div = document.createElement('div');
    div.innerHTML = '<h1>HomepageView</h1>';
    this.viewSelector.innerHTML = '';
    this.viewSelector.appendChild(div);
    console.log('dupa dupa')
    this.getCategories()
  }

  getCategories() {
    CategoryController.show(10)
  }
}

export default new HomepageView();

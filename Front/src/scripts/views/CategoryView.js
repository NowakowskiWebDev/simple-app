import CardsCategoryView from './homepage/cardsCategoryView.js';
import { htmlParent } from "../helpers/parentElements";

class CategoryView {
  async render() {
    this.clearView()
    await CardsCategoryView.init(htmlParent.categoriesList, 'list');
  }
  
  clearView() {
    htmlParent.offersList.innerHTML = ''
  }
}

export default new CategoryView();

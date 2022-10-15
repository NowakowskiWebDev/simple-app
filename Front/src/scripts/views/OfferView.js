import CardsCategoryView from './homepage/cardsCategoryView.js';
import CardsOfferView from './homepage/cardsOfferView.js';

import { htmlParent } from "../helpers/parentElements";

class OfferView {
  async render() {
    await CardsCategoryView.init(htmlParent.categoriesList, 'list');
    await CardsOfferView.init(htmlParent.offersList, 'list');
  }
  
  clearView() {
    htmlParent.offersList.innerHTML = ''
  }
}

export default new OfferView();

import CardsCategoryView from './homepage/cardsCategoryView.js';
import CardsOfferView from './homepage/cardsOfferView.js';

import { htmlParent } from "../helpers/parentElements";

class HomepageView {
  async render() {
    await CardsCategoryView.init(htmlParent.categoriesList, 'list');
    await CardsOfferView.init(htmlParent.offersList, 'list');
  }
}

export default new HomepageView();

import View from '../View.js';
import OfferAPI from "../../API/OfferAPI.js";

export class CardsOfferViews extends View {

  async init(parentElement, template) {

    this._parentElement = parentElement;
    this._template = template;

    const response = await OfferAPI.all()

    if (!response.success) return
    this._data = [...response.data]
    this.render()
  }

  list(data) {
    return `
      <li class="card-category">
      <a class="preview__link" href="/offer/${data.id}" data-link>
       ${data.city}
      </a>
      </li>
    `;
  }
}

export default new CardsOfferViews()

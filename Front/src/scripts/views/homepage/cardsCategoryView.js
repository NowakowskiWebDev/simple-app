import { parseUrl } from "../../helpers/parseUrl.js";

import CategoryAPI from "../../API/CategoryAPI.js";
import View from '../View.js';

class CardsCategoryView extends View {
  
  async init(parentElement, template) {

    this._parentElement = parentElement;
    this._template = template;

    const response = await CategoryAPI.all()

    if (!response.success) return
    this._data = [...response.data]
    console.log(this._data)
    this.render()
  }

  list(data) {
    const url = parseUrl();

    return `
      <li class="card-category">
      <a class="preview__link ${
        data.id === url.id ? 'preview__link--active' : ''
      }" href="/category/${data.id}" data-link>
       ${data.name}
      </a>
      </li>
    `;
  }
}

export default new CardsCategoryView()
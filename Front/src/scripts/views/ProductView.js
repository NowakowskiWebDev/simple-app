import AbstractView from "./AbstractView";

class ProductView extends AbstractView {
  index() {
    let div = document.createElement('div');
    div.innerHTML = '<h1>ProductView</h1>';
    this.appSelector.innerHTML = '';
    this.appSelector.appendChild(div);
  }
}

export default new ProductView();
import AbstractView from "./AbstractView";

class ProductView extends AbstractView {
  render() {
    let div = document.createElement('div');
    div.innerHTML = '<h1>ProductView</h1>';
    this.viewSelector.innerHTML = '';
    this.viewSelector.appendChild(div);
  }
}

export default new ProductView();
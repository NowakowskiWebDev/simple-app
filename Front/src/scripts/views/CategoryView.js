import AbstractView from "./AbstractView";

class CategoryView extends AbstractView {
  index() {
    let div = document.createElement('div');
    div.innerHTML = '<h1>CategoryView</h1>';
    this.appSelector.innerHTML = '';
    this.appSelector.appendChild(div);
  }
}

export default new CategoryView();
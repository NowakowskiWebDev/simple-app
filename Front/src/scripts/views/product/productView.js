class ProductView {
  constructor() {
    this.app_div = document.querySelector('#app');
  }

  index() {
    let div = document.createElement('div');
    div.innerHTML = '<h1>ProductView</h1>';
    this.app_div.innerHTML = '';
    this.app_div.appendChild(div);
  }
}

export default new ProductView();
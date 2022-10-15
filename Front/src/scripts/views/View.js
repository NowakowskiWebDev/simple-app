export default class View { 

  async render(render = true) {
    if (!this._template || !this._data || (Array.isArray(this._data) && this._data.length === 0)) return 
    const markup = this._generateMarkup();
    
    if (!this._parentElement || !render || !markup) return markup;
    
    this._clear();
    
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    let html = '';

    this._data.forEach(el => {
      html += this[this._template](el)
    });

    return html
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}

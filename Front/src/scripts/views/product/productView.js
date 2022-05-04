class ProductView {
  // getQuery() {
  //   const query = this._parentEl.querySelector('.search__field').value;
  //   this._clearInput();
  //   return query;
  // }

  // _clearInput() {
  //   this._parentEl.querySelector('.search__field').value = '';
  // }

  addHandlerSearch(handler, selector) {
    const _parentEl = document.querySelector(selector);
      _parentEl.addEventListener('submit', function (event) {
        event.preventDefault();
        handler();
      });
  }
}

export default new ProductView();
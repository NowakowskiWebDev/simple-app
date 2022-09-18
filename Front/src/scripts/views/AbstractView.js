export default class AbstractView {
  setViewSelector(viewSelector) {
    this.viewSelector = document.querySelector(viewSelector);
  }
}
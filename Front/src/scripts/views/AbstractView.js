export default class AbstractView {
  setComponentSelector(appSelector) {
    this.appSelector = document.querySelector(appSelector);
  }

  setView(view) {
    console.log(view)
  }

  render() {}
}
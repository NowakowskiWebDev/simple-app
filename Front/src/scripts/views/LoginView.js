import AbstractView from "./AbstractView";

class LoginView extends AbstractView {
  index() {
    let div = document.createElement('div');
    div.innerHTML = '<h1>LoginView</h1>';
    this.appSelector.innerHTML = '';
    this.appSelector.appendChild(div);
  }
}

export default new LoginView();

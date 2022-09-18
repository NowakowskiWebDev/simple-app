import AbstractView from "./AbstractView";

class LoginView extends AbstractView {
  render() {
    let div = document.createElement('div');
    div.innerHTML = '<h1>LoginView</h1>';
    this.viewSelector.innerHTML = '';
    this.viewSelector.appendChild(div);
  }
}

export default new LoginView();

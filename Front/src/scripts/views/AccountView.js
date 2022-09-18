import AbstractView from "./AbstractView";

class AccountView extends AbstractView {
  render(id = null) {
    let div = document.createElement("div");
    div.innerHTML = "<h1>AccountView</h1>";
    this.viewSelector.innerHTML = "";
    this.viewSelector.appendChild(div);
  }
}

export default new AccountView();
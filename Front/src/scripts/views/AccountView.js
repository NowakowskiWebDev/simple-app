import AbstractView from "./AbstractView";

class AccountView extends AbstractView {
    index() {
        let div = document.createElement('div');
        div.innerHTML = '<h1>AccountView</h1>';
        this.appSelector.innerHTML = '';
        this.appSelector.appendChild(div);
    }
}

export default new AccountView();
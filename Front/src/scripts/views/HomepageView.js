import AbstractView from "./AbstractView";

class HomepageView extends AbstractView {
    index() {
        let div = document.createElement('div');
        div.innerHTML = '<h1>HomepageView</h1>';
        this.appSelector.innerHTML = ''
        this.appSelector.appendChild(div);
    }
}

export default new HomepageView();
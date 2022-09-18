import AbstractView from "./AbstractView";

class NotFoundView extends AbstractView {
    render() {
        let div = document.createElement('div');
        div.innerHTML = '<h1>CategoryView</h1>';
        this.viewSelector.innerHTML = '';
        this.viewSelector.appendChild(div);
      }
}

export default new NotFoundView();

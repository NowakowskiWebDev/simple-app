import ViewService from "./ViewService.js";

export default class RoutingService {
  constructor() {
    this.links = document.querySelectorAll("[data-link]");
this
    this.loadPage();
    this.registerClickHandler();
  }

  loadPage() {
    history.pushState("", "", window.location.href);
  }

  registerClickHandler() {
    this.links.forEach(link  => link.addEventListener("click", (e) => this.changeSubPage(e)));
  }

  changeSubPage(event) {
    event.preventDefault()
    history.pushState("", "", event.target.href);
    ViewService.changeView()
  }
}

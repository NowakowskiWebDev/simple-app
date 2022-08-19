import { routes } from "../helpers/routes.js";
import { parseRequestUrl } from "../helpers/parseUrl.js";

export default class RoutingService {
  constructor() {
    this.links = document.querySelectorAll("[data-link]");

    this.loadPage();
    this.registerClickHandler();
  }

  loadPage() {
    const requestUrl = parseRequestUrl();
    history.pushState("", "", window.location.href);
    routes(requestUrl);
  }

  registerClickHandler() {
    this.links.forEach(link  => link.addEventListener("click", (e) => this.changeSubPage(e)));
  }

  changeSubPage(event) {
    event.preventDefault()
    history.pushState("", "", event.target.href);
    const requestUrl = parseRequestUrl();
    routes(requestUrl);
  }
}

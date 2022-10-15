import ViewService from "./ViewService.js";

class RoutingService {
  init() {
    this.permanentLinks = document.querySelectorAll("[data-link-permanent] a");
    this.loadPage();
    this.registerPermanentLinksHandler();
    this.registerGenericLinksHandler();
  }
  
  loadPage() {
    history.pushState("", "", window.location.href);
  }
  
  registerGenericLinksHandler() {
    this.genericLinks = document.querySelectorAll("[data-link-generic] a");
    this.genericLinks.forEach(genericLink  => genericLink.addEventListener("click", e => this.changeSubPage(e)));
  }

  registerPermanentLinksHandler() {
    console.log('registerPermanentLinksHandler')
    this.permanentLinks.forEach(permanentlink  => permanentlink.addEventListener("click", e => this.changeSubPage(e)));
  }

  changeSubPage(event) {
    event.preventDefault()
    history.pushState("", "", event.target.href);
    ViewService.changeView()
    console.log('changeSubPage')
    this.registerGenericLinksHandler();
  }
}

export default new RoutingService();


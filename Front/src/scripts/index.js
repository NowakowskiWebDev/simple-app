import 'bootstrap';
import '../scss/style.scss';
import RoutingService from "./services/RoutingService";
import { routes } from "./routing/routes.js";

import { parseRequestUrl } from "./helpers/parseUrl.js";

function router() {
    const requestUrl = parseRequestUrl();

    routes(requestUrl.resource);
};

document.addEventListener("DOMContentLoaded", () => {
    try {
        console.log(parseRequestUrl())

        window.addEventListener("click", e => {
            if (e.target.matches("[data-link]")) {
                e.preventDefault();
                history.pushState("", "", e.target.href);
                router();
            }
        });
        // window.addEventListener("click", e => {
        //     if (e.target.matches("[data-link]")) {
        //         e.preventDefault();
        //         history.pushState("", "", e.target.href);
        //         router();
        //     }
        // });
      } catch (error) {
        console.error(error);
      }  
})

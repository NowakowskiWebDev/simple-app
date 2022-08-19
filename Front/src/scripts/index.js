import 'bootstrap';
import '../scss/style.scss';

import RoutingService from "./services/RoutingService";

document.addEventListener("DOMContentLoaded", () => {
    try {
        new RoutingService()
    } catch (error) {
        console.error(error);
    }  
})

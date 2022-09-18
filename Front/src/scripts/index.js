import 'bootstrap';
import '../scss/style.scss';

import RoutingService from "./services/RoutingService";
import CategoryController from "./controllers/CategoryController";
import ViewService from "./services/ViewService";

document.addEventListener("DOMContentLoaded", () => {
    try {
        new RoutingService()
    } catch (error) {
        console.error(error);
    }  
    try {
        ViewService.run()
    } catch (error) {
        console.error(error);
    }  
})

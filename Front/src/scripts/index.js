import 'bootstrap';
import '../scss/style.scss';

import ViewService from "./services/ViewService";
import RoutingService from "./services/RoutingService";

document.addEventListener("DOMContentLoaded", () => {
    try {
        ViewService.run()
    } catch (error) {
        console.error(error);
    }  
    try {
        RoutingService.init()
        console.log('RoutingService')
    } catch (error) {
        console.error(error);
    }  
})

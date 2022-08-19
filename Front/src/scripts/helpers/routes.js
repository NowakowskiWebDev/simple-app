import { views } from './views.js';
import NotFoundView from "../views/NotFoundView.js";

export const routes = (request, id = null) => {  
  if (!(request.resource in views)) {
    NotFoundView.render()
  }

  let componentView
  
  if (id !== null) {
    componentView = views[request.resource](id)
  } else {
    componentView = views[request.resource]()
  }

  componentView.setComponentSelector('#app')
  componentView.render()
};
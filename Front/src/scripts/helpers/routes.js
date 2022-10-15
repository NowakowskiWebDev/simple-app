import { views } from './views.js';
import NotFoundView from "../views/NotFoundView.js";

export const routes = (view, id = null) => {  
  if (!(view in views)) {
    NotFoundView.render()
  }

  return views[view]
};
import 'bootstrap';
import '../sass/style.scss';
import 'regenerator-runtime/runtime';
// Change import in polyfills.ts
import 'core-js/es7/reflect';

import productView from './views/productView.js';
import ProductController from './Controllers/ProductController';
import ProductModel from './Models/ProductModel';

const ProductGetAll = async function () {
  try {

    const payload = await ProductModel.loadAll();
    console.log(payload);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  productView.addHandlerSearch(ProductGetAll, '.search');
};
init();
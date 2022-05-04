import { API_URL } from '../config.js';
// import { getJSON, sendJSON } from './helpers.js';
import * as json from '../helpers/json.js';

class ProductModel {

  all = async function () {
    try {
      const response = await json.getJSON(`${API_URL}`);

      return response;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  }

  get = async function (id) {
    try {
      const response = await json.getJSON(`${API_URL}/${id}`);

      return response;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  }

  create = async function (data, model) {
    try {
      const response = await json.postJSON(`${API_URL}/${model}`, data);

      return response;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  }

  update = async function (data, model, id) {
    try {
      const response = await json.postJSON(`${API_URL}/${model}/${id}`, data);

      return response;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  }

  delete = async function (model, id) {
    try {
      const response = await json.deleteJSON(`${API_URL}/${model}/${id}`);

      return response;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  }
}

export default new ProductModel();
import { API_URL } from '../config.js';
// import { getJSON, sendJSON } from './helpers.js';
import * as json from '../helpers/json.js';

const urlModel = 'product';

class CategoryModel {

  all = async function (model) {
    try {
      console.log(API_URL)
      const response = await json.getJSON(`${API_URL}/${model}`);

      return response;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  }

  get = async function (model, id) {
    try {
      console.log(API_URL)
      const response = await json.getJSON(`${API_URL}/${model}/${id}`);

      return response;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  }
}

export default new CategoryModel();
import { API_URL } from './../config.js';
// import { getJSON, sendJSON } from './helpers.js';
import { getJSON } from './../helpers.js';

class ProductModel {
  loadAll = async function () {
    try {
      const data = await getJSON(`${API_URL}`);

      return data;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  }
}

export default new ProductModel();
import { API_URL } from '../config.js';
// import { getJSON, sendJSON } from './helpers.js';
import * as json from '../helpers/json.js';

const urlModel = 'product';

class UserModel {
  all = async function () {
    try {
      console.log(API_URL)
      const response = await json.getJSON(`${API_URL}`);

      return response;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  }
}

export default new UserModel();
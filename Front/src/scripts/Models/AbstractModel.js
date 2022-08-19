// import { API_URL } from '../config.js';
// import { getJSON, sendJSON } from './helpers.js';
import * as json from '../helpers/json.js';

export default class AbstractModel {

  constructor(url) {
    this.url = url;
  }

  all = async function () {
    try {
      const response = await json.getJSON(`${this.url}`);

      return response;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  }

  get = async function () {
    try {
      const response = await json.getJSON(`${this.url}`);

      return response;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  }

  create = async function (data) {
    try {
      const response = await json.postJSON(`${this.url}`, data);

      return response;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  }

  update = async function (data) {
    try {
      const response = await json.updateJSON(`${this.url}`, data);

      return response;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  }

  delete = async function () {
    try {
      const response = await json.deleteJSON(`${this.url}`);

      return response;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  }
}
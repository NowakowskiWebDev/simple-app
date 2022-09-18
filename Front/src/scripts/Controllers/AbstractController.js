import { API_URL } from '../helpers/config.js';
import * as json from "../helpers/json.js";

export default class AbstractController {
  constructor(model) {
    this.url = this.setApiUrl(model)
  }

  /**
   * Display all resources.
   */
  all = async function () {
    try {
      const response = await json.getJSON(`${this.url}`);

      return response;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  };

  /**
   * Store a newly created resource in storage.
   */
  store = async function (payload) {
    try {
      const response = await json.postJSON(`${this.url}`, payload);

      return response;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
    }
  };

  /**
   * Display the specified resource.
   */
  show = async function (id) {
    try {
      console.log(`${this.url}/${id}`)
      const response = await json.getJSON(`${this.url}/${id}`);

      return response;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  };

  /**
   * Update the specified resource in storage.
   */
  update = async function (id, payload) {
    try {
      console.log(`${this.url}/${id}`)
      const response = await json.updateJSON(`${this.url}/${id}`, payload);

      return response;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  };

  /**
   * Remove the specified resource from storage.
   */
  destroy = async function () {
    try {
      const response = await json.deleteJSON(`${this.url}`);

      return response;
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  };

  setApiUrl(model) {
    return `${API_URL}/${model}`;
  }
}

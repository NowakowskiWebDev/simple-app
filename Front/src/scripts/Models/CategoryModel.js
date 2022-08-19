import { API_URL } from '../config.js'
import AbstractModel from './AbstractModel.js'
// import { getJSON, sendJSON } from './helpers.js';
import * as json from '../helpers/json.js';

export default class CategoryModel extends AbstractModel {
  constructor(id, model='category') {
    this.id = id;
    this.model = model;
    
    super(this.getUrl());
  }

  getUrl() {
    if (!this.id) {
      return `${API_URL/this.model}` 
    }
    return `${API_URL/this.model/this.id}` 
  }
}
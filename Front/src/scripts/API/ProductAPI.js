import AbstractAPI from './AbstractAPI.js'

class ProductAPI extends AbstractAPI {
  constructor() {
    super('product');
  }
}

export default new ProductAPI();

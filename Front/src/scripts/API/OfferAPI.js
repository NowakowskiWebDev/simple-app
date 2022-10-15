import AbstractAPI from './AbstractAPI.js'

class OfferAPI extends AbstractAPI {
  constructor() {
    super('offer');
  }
}

export default new OfferAPI();

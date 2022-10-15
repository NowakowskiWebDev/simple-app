import AbstractAPI from './AbstractAPI.js'

class UserAPI extends AbstractAPI {
  constructor() {
    super('user');
  }
}

export default new UserAPI();

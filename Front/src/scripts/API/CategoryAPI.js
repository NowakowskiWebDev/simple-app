import AbstractAPI from './AbstractAPI.js'

class CategoryAPI  extends AbstractAPI {
  constructor() {
    super('category')
  }
}

export default new CategoryAPI();
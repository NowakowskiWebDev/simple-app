import AbstractController from './AbstractController.js'

class CategoryController  extends AbstractController {
  constructor() {
    super('category')
  }
}

export default new CategoryController();
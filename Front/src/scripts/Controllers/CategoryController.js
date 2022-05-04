import CategoryModel from '../models/CategoryModel';

class CategoryController {

  /**
   * Display a listing of the resource.
   */
  index = async function () {
    try {

      const response = await CategoryModel.all(this.model);

      return response

    } catch (err) {
      // recipeView.renderError();
      console.error(err);
    }
  };

  /**
   * Display the specified resource.
   *
   * @param  int $id
   * @return 
   */
  show = async function (id) {
    {

      const response = await CategoryModel.find(id, this.model);

      return response

    }
  }
}

export default new CategoryController();
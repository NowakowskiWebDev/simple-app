import ProductModel from '../models/ProductModel';

class ProductController {

  /**
    * Display a listing of the resource.
    */
  index = async function () {
    try {
      // 2) Loading recipe
      const payload = await ProductModel.all(this.model);

      return payload

    } catch (err) { 
      // recipeView.renderError();
      console.error(err);
    }
  };

  /**
    * Store a newly created resource in storage.
    */
  store = async function (formData) {
    try {
      // 2) Loading recipe
      const payload = await ProductModel.save(formData, this.model);

      return payload

    } catch (err) {
      // recipeView.renderError();
      console.error(err);
    }
  }


  /**
    * Display the specified resource.
    */
  show = async function (id) {
    try {
      // 2) Loading recipe
      const payload = await ProductModel.find(id, this.model);

      return payload

    } catch (err) {
      // recipeView.renderError();
      console.error(err);
    }
  }

  /**
    * Update the specified resource in storage.
    */
  update = async function (formData, id) {
    try {
      // 2) Loading recipe
      const payload = await ProductModel.save(formData, id, this.model);

      return payload

    } catch (err) {
      // recipeView.renderError();
      console.error(err);
    }
  }

  /**
    * Remove the specified resource from storage.
    */
  destroy = async function (id) {
    try {
      // 2) Loading recipe
      const payload = await ProductModel.delete(id, this.model);

      return payload

    } catch (err) {
      // recipeView.renderError();
      console.error(err);
    }
  }
}

export default new ProductController();
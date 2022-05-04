import UserModel from '../models/UserModel';

class UserController {

  /**
    * Store a newly created resource in storage.
    */
  store = async function (formData) {
    try {
      // 2) Loading recipe
      const payload = await UserModel.save(formData, this.model);

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
      const payload = await UserModel.find(id, this.model);

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
      const payload = await UserModel.save(formData, id, this.model);

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
      const payload = await UserModel.delete(id, this.model);

      return payload

    } catch (err) {
      // recipeView.renderError();
      console.error(err);
    }
  }
}

export default new UserController();
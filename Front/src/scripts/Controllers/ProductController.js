import ProductModel from './../Models/ProductModel';

class ProductController {
    controlRecipes = async function () {
        try {
        const test = new ProductModel;

          // 2) Loading recipe
          const payload = await test.loadAll();
      
          // 3) Rendering recipe
          console.log(payload);
        } catch (err) {
          // recipeView.renderError();
          console.error(err);
        }
      };
}

export default new ProductController();
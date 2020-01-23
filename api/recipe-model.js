const db = require("../data/db-config");
module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}
function getShoppingList(id) {
  //   select r.recipe_name,i.ingredient_name, i.quantity, i.type
  // from ingredients as i
  // join recipes_ingredients as ri
  // on i.id = ri.ingredient_id
  // join recipes as r
  // on i.id = r.id
  // where r.id = 1;

  return db("ingredients as i")
    .select("r.recipe_name", "i.ingredient_name", "i.quantity", "i.type")
    .join("recipes_ingredients as ri", "i.id", "=", "ri.ingredient_id")
    .join("recipes as r", "i.id", "=", "r.id")
    .where("r.id", id);
}
function getInstructions(id) {
  //   select
  // r. instructions
  // from recipes as r
  // where r.id = 2;
  return db("recipes as r ")
    .select("r. instructions ")
    .where("r.id", id);
}

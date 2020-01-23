exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "phone", quantity: "1.2", type: "lbs" },
        { ingredient_name: "Egg", quantity: "3.5", type: "tbs" },
        { ingredient_name: "potato", quantity: "1.5", type: "gram" }
      ]);
    });
};

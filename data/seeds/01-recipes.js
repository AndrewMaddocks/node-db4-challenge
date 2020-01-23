exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          recipe_name: "pizza",
          instructions:
            "first go to your phone and then call the pizza place of your liking"
        },
        { recipe_name: "eggs", instructions: "crack,drop,fry" },
        { recipe_name: "potato", instructions: "peel,clean,eat" }
      ]);
    });
};

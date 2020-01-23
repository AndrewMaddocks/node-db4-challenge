exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .string("recipe_name")
        .notNullable()
        .index();
      tbl.string("instructions").notNullable();
    })

    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .string("ingredient_name")
        .notNullable()
        .index();
      tbl
        .float("quantity")
        .unsigned()
        .notNullable();
      tbl.string("type").notNullable();
    })

    .createTable("recipes_ingredients", tbl => {
      tbl.increments();
      tbl
        .string("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .string("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema

    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};

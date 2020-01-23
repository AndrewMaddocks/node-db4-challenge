const express = require("express");
const helmet = require("helmet");
const Recipe = require("./recipe-model");
const server = express();

server.use(helmet());
server.use(express.json());

server.get("/api/recipes", (req, res) => {
  Recipe.getRecipes()
    .then(rec => {
      res.json(rec);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});
server.get("/api/recipes/:id/shoppingList", (req, res) => {
  const { id } = req.params;

  Recipe.getShoppingList(id)
    .then(steps => {
      if (steps.length) {
        res.json(steps);
      } else {
        res.status(404).json({
          message: "Could not find ingredients and quantity for given recipe"
        });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Failed to get ingrediets and quantity" });
    });
});
server.get("/api/recipes/:id/instructions", (req, res) => {
  const { id } = req.params;

  Recipe.getInstructions(id)
    .then(steps => {
      if (steps.length) {
        res.json(steps);
      } else {
        res.status(404).json({
          message: "Could not find the intructions for given recipe"
        });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Failed to get ingrediets and quantity" });
    });
});

module.exports = server;

import express from "express";
const router = express.Router();
import fs from "fs";

function readCocktails() {
  try {
    const dataBuffer = fs.readFileSync("./data/cocktail.json");
    const cocktailData = JSON.parse(dataBuffer);
    return cocktailData;
  } catch (error) {
    console.error("error reading the file", error);
  }
}

const cocktailData = readCocktails();
console.log(cocktailData);

router.get("/", (req, res) => {
  const cocktails = readCocktails();
  const homePageData = cocktails.map((cocktail) => {
    return {
      id: cocktail.drink_id,
      image: cocktail.image,
      name: cocktail.name,
      category: cocktail.category,
    };
  });
  res.send(homePageData);
});

router.get("/:drinkID", (req, res) => {
  const cocktails = readCocktails();
  const foundCocktail = cocktails.find((cocktail) => {
    return cocktail.drink_id === req.params.drinkID;
  });
  if (foundCocktail) {
    res.json(foundCocktail);
  }
});

export default router;

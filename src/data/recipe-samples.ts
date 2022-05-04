import { Recipe } from "../schema/recipe.schema";

export function createRecipeSamples() {
  return [
    createRecipe({        
      description: "Dal with Chawal",
      title: "Dal-Chawal",
      ingredients: ["Dal", "Chawal"],
      creationDate: new Date("2022-05-03"),
    }),
    createRecipe({
      description: "Mattar Paneer with Chawal",
      title: "Mattar-Paneer",
      ingredients: ["Mattar", "Paneer", "Chawal"],
      creationDate: new Date("2022-05-03"),
    }),
    createRecipe({
      description: "Idli with Dosa",
      title: "Idli-Dosa",
      ingredients: ["Idli", "Dosa"],
      creationDate: new Date(),
    }),
  ];
}

function createRecipe(recipeData: Partial<Recipe>) {
  return Object.assign(new Recipe(), recipeData);
}

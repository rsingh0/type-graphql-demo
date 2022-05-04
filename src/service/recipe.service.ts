import { createRecipeSamples } from "../data/recipe-samples";
import { NewRecipeInput } from "../schema/recipe.input";
import { Recipe } from "../schema/recipe.schema";
import { remove } from "lodash";

export class RecipeService {
  private readonly recipies: Recipe[] = createRecipeSamples();

  getRecipies(): Recipe[] {
    return this.recipies;
  }
  getRecipeByTitle(title: string): Recipe | undefined {
    return this.recipies.find((recipe) => recipe.title === title);
  }

  removeRecipeByTitle(title: string): Boolean {
    remove(this.recipies, { title });
    return true;
  }
  addNewRecipe(newRecipeData: NewRecipeInput): Recipe {
    const recipe = Object.assign(new Recipe(), {
      description: newRecipeData.description,
      title: newRecipeData.title,
      ingredients: newRecipeData.ingredients,
      creationDate: new Date(),
    });
    this.recipies.push(recipe);
    return recipe;
  }
}

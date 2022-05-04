import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { NewRecipeInput } from "../schema/recipe.input";
import { Recipe } from "../schema/recipe.schema";
import { RecipeService } from "../service/recipe.service";

@Resolver(Recipe)
export default class RecipeResolver {
  constructor(private recipeService: RecipeService) {
    this.recipeService = new RecipeService();
  }

  @Query((returns) => [Recipe])
  async recipes() {
    return this.recipeService.getRecipies();
  }

  @Query((returns) => Recipe)
  async recipe(@Arg("title") title: string) {
    return this.recipeService.getRecipeByTitle(title);
  }

  @Mutation((returns) => Recipe)
  async addRecipe(
    @Arg("newRecipeData") newRecipeData: NewRecipeInput
  ): Promise<Recipe> {
    return this.recipeService.addNewRecipe(newRecipeData);
  }

  @Mutation((returns) => Boolean)
  async removeRecipe(@Arg("title") title: string) {
    return this.recipeService.removeRecipeByTitle(title);
  }
}

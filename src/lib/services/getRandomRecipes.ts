import api from "../api/api";
import { RandomRecipesResponse, Recipe } from "../types/recipe";

export async function getRandomRecipes(number: number = 5) {
  const { data } = await api.get<RandomRecipesResponse>("/recipes/random", {
    params: { number },
  });

  return data.recipes;
}

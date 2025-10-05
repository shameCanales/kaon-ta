import api from "../api/api";
import { RandomRecipesResponse } from "../types/Recipe";

export async function getRandomRecipes(number: number = 5) {
  const { data } = await api.get<RandomRecipesResponse>("/recipes/random", {
    params: { number },
  });

  return data.recipes;
}

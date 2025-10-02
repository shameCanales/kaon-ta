import { useQuery } from "@tanstack/react-query";
import { getRandomRecipes } from "../services/getRandomRecipes";
import { Recipe } from "../types/recipe";

export function useGetRandomRecipes(number: number = 20) {
  return useQuery<Recipe[]>({
    queryKey: ["randomRecipes", number],
    queryFn: () => getRandomRecipes(number),
  });
}

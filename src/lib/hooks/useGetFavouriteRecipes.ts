import { useQueries } from "@tanstack/react-query";
import { getRecipeById } from "../services/getRecipeById";

export function useGetFavouriteRecipes(favourites: number[]) {
  const queries = useQueries({
    queries: favourites.map((id) => ({
      queryKey: ["recipe", id],
      queryFn: () => getRecipeById(id),
      enable: !!id,
      staleTime: 1000 * 60 * 5,
    })),
  });

  const isLoading = queries.some((query) => query.isLoading);
  const isError = queries.some((query) => query.isError);
  const error = queries.find((query) => query.data)?.error ?? null;
  const data = queries.map((query) => query.data).filter(Boolean);

  return { data, isLoading, isError, error };
}

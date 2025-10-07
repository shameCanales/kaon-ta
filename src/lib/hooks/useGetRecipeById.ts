import { useQuery } from "@tanstack/react-query";
import { getRecipeById } from "../services/getRecipeById";

export const useGetRecipeById = (id?: number) => {
  return useQuery({
    queryKey: ["recipe", id],
    queryFn: () => getRecipeById(id!),
    enabled: !!id, //enable if there's an id
  });
};

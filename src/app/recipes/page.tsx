"use client";

import { useGetRandomRecipes } from "@/lib/hooks/useGetRandomRecipes";
import { Recipe } from "@/lib/types/recipe";
import Image from "next/image";

export default function Recipes() {
  const { data, isLoading, isError, error } = useGetRandomRecipes(5);

  if (isLoading) return <p>Loading recipes...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Random Recipes</h1>
      <ul className="grid grid-cols-2 gap-4">
        {data?.map((recipe: Recipe) => (
          <li key={recipe.id} className="p-4 border rounded-lg">
            <p className="font-semibold">{recipe.title}</p>
            <Image
              src={recipe.image}
              alt={recipe.title}
              width="50"
              height="50"
              className="mt-2 rounded"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

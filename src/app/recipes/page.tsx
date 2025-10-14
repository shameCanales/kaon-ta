"use client";

import { useGetRandomRecipes } from "@/lib/hooks/useGetRandomRecipes";
import { Recipe } from "@/lib/types/Recipe";
import { montserrat } from "@/lib/fonts";
import RecipeSearch from "@/components/sections/RecipeSearch";
import RecipeCard from "@/components/RecipeCard";

export default function Recipes() {
  const { data, isLoading, isError, error } = useGetRandomRecipes(20);

  if (isLoading) return <p>Loading recipes...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <div>
      <RecipeSearch />

      <div className="px-6 py-5 mt-5">
        <h1 className={` text-3xl font-extrabold ${montserrat.className}`}>
          Popular Recipes
        </h1>
        <ul className="grid gap-4 mt-5">
          {data?.map((recipe: Recipe) => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

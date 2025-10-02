"use client";

import { useGetRandomRecipes } from "@/lib/hooks/useGetRandomRecipes";
import { Recipe } from "@/lib/types/recipe";
import Image from "next/image";
import { montserrat } from "@/lib/fonts";

export default function Recipes() {
  const { data, isLoading, isError, error } = useGetRandomRecipes(5);

  if (isLoading) return <p>Loading recipes...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <div className="px-6 py-5 mt-5">
      <h1 className={` text-3xl font-extrabold ${montserrat.className}`}>Popular Recipes</h1>
      <ul className="grid gap-4">
        {data?.map((recipe: Recipe) => (
          <li key={recipe.id} className="shadow-2xs bg-stone-50 rounded-2xl">
            <Image
              src={recipe.image}
              alt={recipe.title}
              width="550"
              height="550"
              className="rounded w-full aspect-video bg-clip-border"
            />
            <p className="font-semibold">{recipe.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

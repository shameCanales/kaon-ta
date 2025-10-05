"use client";

import { useGetRandomRecipes } from "@/lib/hooks/useGetRandomRecipes";
import { Recipe } from "@/lib/types/Recipe";
import Image from "next/image";
import { montserrat } from "@/lib/fonts";
import Link from "next/link";

export default function Recipes() {
  const { data, isLoading, isError, error } = useGetRandomRecipes(20);

  if (isLoading) return <p>Loading recipes...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <div className="px-6 py-5 mt-5">
      <h1 className={` text-3xl font-extrabold ${montserrat.className}`}>
        Popular Recipes
      </h1>
      <ul className="grid gap-4 mt-5">
        {data?.map((recipe: Recipe) => (
          <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
            <li className="shadow-sm  bg-stone-50 rounded-2xl">
              <Image
                src={recipe.image}
                alt={recipe.title}
                width="550"
                height="550"
                className="rounded-t-2xl w-full aspect-video"
              />

              <div className="py-6 pt-4 px-4">
                <p className="font-bold text-xl">{recipe.title}</p>
                <div className="mt-4 grid gap-3 text-stone-600">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/scales.png"}
                      alt={recipe.title}
                      width="550"
                      height="550"
                      className="w-[20px]"
                    />
                    <p>{`${recipe.pricePerServing} per serving`}</p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <Image
                        src={"/watch.png"}
                        alt={recipe.title}
                        width="550"
                        height="550"
                        className="w-[20px]"
                      />
                      <p>{`${recipe.readyInMinutes} mins`}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src={"/cardiogram.png"}
                        alt={recipe.title}
                        width="550"
                        height="550"
                        className="w-[20px]"
                      />
                      <p>Health Score: {recipe.healthScore}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap mt-4">
                  {recipe.dishTypes.map((type) => {
                    return (
                      <p
                        className="bg-green-700 text-stone-50 text-sm py-2 px-3 rounded-3xl"
                        key={type}
                      >
                        {type}
                      </p>
                    );
                  })}
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

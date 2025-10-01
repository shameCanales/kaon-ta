"use client";

import { useRef } from "react";
import { inter } from "@/lib/fonts";
import CategoryButton from "../ui/CategoryButton";

export default function RecipeSearch() {
  const searchRecipeField = useRef<HTMLInputElement>(null);

  const handleSearchRecipe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("search...", searchRecipeField.current?.value);
  };

  return (
    <div className="relative bg-[url('/hero-background.jpg')] bg-cover bg-center z-1">
      <div className="absolute inset-0 bg-black/50 z-[-1]"></div>

      <div className="text-stone-50 px-5 pt-20 pb-25">
        <p className={`text-4xl leading-snug ${inter.className}`}>
          Explore Over <span className="font-extrabold">50,000+</span> Unique
          Low-Carb and Keto Recipes.
        </p>

        <form onSubmit={handleSearchRecipe} className="mt-15 ">
          <div className="grid grid-cols-[1fr_80px] py-1 w-full">
            <input
              placeholder="Explore..."
              type="text"
              id="searchRecipe"
              name="searchRecipe"
              ref={searchRecipeField}
              className={`bg-stone-50 text-stone-400 rounded-3xl outline-none box-border px-6 h-full ${inter.className}`}
            />

            <button
              type="button"
              className="font-bold bg-sky-600 ml-[-55px]  py-3 rounded-3xl"
            >
              Search
            </button>
          </div>
        </form>

        <p className={`mt-5 text-lg`}>
          <span className={`font-extrabold`}>Cant Think of anything?</span> Try
          these popular tags
        </p>

        <div className="flex gap-3 flex-wrap mt-5">
          <CategoryButton label={"Glutten Free"} />
          <CategoryButton label={"Quick & Easy"} />
          <CategoryButton label={"Snacks"} />
          <CategoryButton label={"Desserts"} />
        </div>
      </div>
    </div>
  );
}

"use client";

import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";
import { useGetFavouriteRecipes } from "@/lib/hooks/useGetFavouriteRecipes";
import RecipeCard from "@/components/RecipeCard";
import Link from "next/link";

export default function FavouritesPage() {
  const favouriteRecipes = useSelector(
    (state: RootState) => state.favourites.favouriteRecipes
  );

  console.log(favouriteRecipes);

  const { data, isLoading, isError, error } =
    useGetFavouriteRecipes(favouriteRecipes);

  if (!data) {
    return (
      <div>
        <h1>Refresh to get results</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
        <p>Hold on. getting your favourites...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Something went wrong...</h1>
        <p>Refresh the page...</p>
      </div>
    );
  }

  if (data) {
    return (
      <div className="pt-26 px-4">
        <h1 className="font-bold text-3xl">
          {favouriteRecipes.length === 0
            ? "No Favourites Yet."
            : "My Favourites"}
        </h1>
        {favouriteRecipes.length === 0 && (
          <p>
            Explore <Link href={"/recipes"}>Recipes</Link> and mark as favourite
          </p>
        )}

        <div className=" grid gap-2 mt-5">
          {data.map((recipe) => (
            <RecipeCard key={recipe.title} recipe={recipe} />
          ))}
        </div>

        {}
      </div>
    );
  }
}

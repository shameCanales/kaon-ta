"use client";

import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";
import { useGetFavouriteRecipes } from "@/lib/hooks/useGetFavouriteRecipes";

export default function FavouritesPage() {
  const favouriteRecipes = useSelector(
    (state: RootState) => state.favourites.favouriteRecipes
  );

  const { data, isLoading, isError, error } =
    useGetFavouriteRecipes(favouriteRecipes);

  return (
    <div className="pt-26">
      <h1>My Favourites</h1>

      <h1>{data}</h1>
    </div>
  );
}

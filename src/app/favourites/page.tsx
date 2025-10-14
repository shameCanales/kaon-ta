"use client";

import { RootState } from "@/lib/store/store";
import { useSelector, useDispatch } from "react-redux";
import { useGetFavouriteRecipes } from "@/lib/hooks/useGetFavouriteRecipes";
import { AppDispatch } from "@/lib/store/store";
import { favouritesActions } from "@/lib/store/favouritesSlice";
import RecipeCard from "@/components/RecipeCard";

export default function FavouritesPage() {
  const dispatch = useDispatch<AppDispatch>();
  const favouriteRecipes = useSelector(
    (state: RootState) => state.favourites.favouriteRecipes
  );

  const handleRemoveFromFavourites = (id: number) => {
    console.log(id);
    dispatch(favouritesActions.removeInFavourites({ id }));
  };

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
      <div className="pt-26">
        <h1>My Favourites</h1>

        <div>
          {data.map((recipe) => (
            <div key={recipe.title}>
              <RecipeCard recipe={recipe} />
              <h1>{recipe.title}</h1>

              <button onClick={() => handleRemoveFromFavourites(recipe.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

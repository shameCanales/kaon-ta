import { createSlice } from "@reduxjs/toolkit";

interface InitialFavouritesState {
  favouriteRecipes: number[];
}

const initialFavouritesState: InitialFavouritesState = {
  favouriteRecipes: [715588, 636632, 649141],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState: initialFavouritesState,
  reducers: {
    addToFavourites: (state, action) => {
      const { id } = action.payload;
      state.favouriteRecipes.push(id);
      console.log(id, [...state.favouriteRecipes]);
    },
    removeInFavourites: (state, action) => {
      const { id } = action.payload;
      state.favouriteRecipes = state.favouriteRecipes.filter(
        (recipeId) => recipeId !== id
      );
    },
  },
});

export const favouritesActions = favouritesSlice.actions;
export default favouritesSlice;

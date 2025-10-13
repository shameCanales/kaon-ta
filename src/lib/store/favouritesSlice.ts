import { createSlice } from "@reduxjs/toolkit";

interface InitialFavouritesState {
  favouriteRecipes: number[];
}

const initialFavouritesState: InitialFavouritesState = {
  favouriteRecipes: [],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState: initialFavouritesState,
  reducers: {
    addToFavourites: (state, action) => {
      const { id } = action.payload;
      state.favouriteRecipes.push(id);
    },
  },
});

export const favouritesActions = favouritesSlice.actions;
export default favouritesSlice;

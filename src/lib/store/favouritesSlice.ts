import { createSlice } from "@reduxjs/toolkit";

interface InitialFavouritesState {
  favouriteRecipes: number[];
}

let storedFavourites = [];

if (typeof window !== "undefined") {
  try {
    const storedRawFavourites = localStorage.getItem("favourites");
    storedFavourites = storedRawFavourites
      ? JSON.parse(storedRawFavourites)
      : [];
  } catch (error) {
    console.error("Invalid FavouriteItems in localstorage", error);
  }
}

const initialFavouritesState: InitialFavouritesState = {
  favouriteRecipes: storedFavourites,
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState: initialFavouritesState,
  reducers: {
    toggleFavourite: (state, action) => {
      const { id } = action.payload;
      const index = state.favouriteRecipes.indexOf(id);

      if (index >= 0) {
        state.favouriteRecipes.splice(index, 1);
      } else {
        state.favouriteRecipes.push(id);
      }
    },
  },
});

export const favouritesActions = favouritesSlice.actions;
export default favouritesSlice;

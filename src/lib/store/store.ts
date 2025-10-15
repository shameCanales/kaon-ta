import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import favouritesSlice from "./favouritesSlice";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    favourites: favouritesSlice.reducer,
  },
});

if (typeof window !== "undefined") {
  store.subscribe(() => {
    const state: RootState = store.getState();
    const { favouriteRecipes } = state.favourites;
    localStorage.setItem("favourites", JSON.stringify(favouriteRecipes));
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

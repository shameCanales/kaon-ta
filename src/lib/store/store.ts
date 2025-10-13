import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import favouritesSlice from "./favouritesSlice";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    favourites: favouritesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

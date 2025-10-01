import { createSlice } from "@reduxjs/toolkit";

interface InitialUiState {
  mobileNavIsOpen: boolean;
}

const initialUiState: InitialUiState = {
  mobileNavIsOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggleMobileNav: (state) => {
      state.mobileNavIsOpen = !state.mobileNavIsOpen;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

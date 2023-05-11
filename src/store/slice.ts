import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "bg",
  initialState: {
    text: "bgLandingPage",
  },
  reducers: {
    updateBg: (state, action) => {
      const text = action.payload;
      state.text = text;
    },
  },
});

export const { updateBg } = slice.actions;

export const reducer = slice.reducer;

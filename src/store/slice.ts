import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "bg",
  initialState: {
    text: "bgLandingPage",
    breathingAnimation: false,
  },
  reducers: {
    updateBg: (state, action) => {
      const text = action.payload;
      state.text = text;
    },
    updateBreathing: (state) => {
      state.breathingAnimation = state.breathingAnimation ? false : true;
    },
  },
});

export const { updateBg, updateBreathing } = slice.actions;

export const reducer = slice.reducer;

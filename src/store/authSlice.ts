import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authUser",
  initialState: {
    fullName: null,
    uid: null,
  },
  reducers: {
    updateAuthStateChanged: (state, action) => {
      const { fullName, id } = action.payload;
      state.fullName = fullName;
      state.uid = id;
      console.log(state.fullName);
    },
    signOut: (state) => {
      state.fullName = null;
      state.uid = null;
      console.log(state.fullName);
    },
  },
});

export const { updateAuthStateChanged, signOut } = authSlice.actions;
console.log(authSlice);

export const authReducer = authSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthStateType = {
  fullName: string | null;
  uid: string | null;
};

// type PayloadAction = { fullName: string; id: string }

export const authSlice = createSlice({
  name: "authUser",
  initialState: {
    fullName: null,
    uid: null,
  } as AuthStateType,
  reducers: {
    updateAuthStateChanged: (
      state,
      action: PayloadAction<{ fullName: string; id: string }>
    ) => {
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

import { createSlice } from "@reduxjs/toolkit";

// export type AuthStateType = {
//   fullName: string | null;
//   uid: string | null;
//   email: string | null;
// };

export type AuthStateType = {
  fullName: string | null;
  uid: string | null;
  email: string | null;
};

// type PayloadAction = { fullName: string; id: string }

export const authSlice = createSlice({
  name: "authUser",
  initialState: {
    fullName: null,
    uid: null,
    email: null,
  } as AuthStateType,
  reducers: {
    // updateAuthStateChanged: (state, action: PayloadAction<AuthStateType>) => {
    updateAuthStateChanged: (state, action) => {
      const { fullName, id, email } = action.payload;
      state.fullName = fullName;
      state.uid = id;
      state.email = email;

      // state = { ...state, ...action.payload };
    },
    signOut: (state) => {
      state.fullName = null;
      state.uid = null;
      state.email = null;
    },
  },
});

export const { updateAuthStateChanged, signOut } = authSlice.actions;

export const authReducer = authSlice.reducer;

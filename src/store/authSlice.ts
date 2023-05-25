import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    updateAuthStateChanged: (state, action: PayloadAction<AuthStateType>) => {
      console.warn(action.payload);
      state = { ...state, ...action.payload };
      console.log(state.fullName);
    },
    signOut: (state) => {
      state.fullName = null;
      state.uid = null;
      state.email = null;
      console.log(state.fullName);
    },
  },
});

export const { updateAuthStateChanged, signOut } = authSlice.actions;
console.log(authSlice);

export const authReducer = authSlice.reducer;

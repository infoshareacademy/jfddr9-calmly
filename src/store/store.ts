import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slice";
import { authReducer } from "./authSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  bg: reducer,
  authUser: authReducer,
});

// export const store = configureStore({
//   reducer: { reducer },
// });

export const store = configureStore({
  reducer: rootReducer,
});

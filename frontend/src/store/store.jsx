import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./reducers/reducers";

export const store = configureStore({
  reducer: loginReducer,
  devTools: true,
});

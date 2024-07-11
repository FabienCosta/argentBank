import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./reducers/reducers";

const rootReducer = combineReducers({
  login: loginReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./reducers/reducers";
import { userReducer } from "./reducers/userReducers";

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

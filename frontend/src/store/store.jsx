import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./reducers/reducers";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

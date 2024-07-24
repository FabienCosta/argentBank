import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loginReducer } from "./reducers/authReducers";
import { userReducer } from "./reducers/userReducers";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // cette partie permet d'ignorer les actions non sérialisables
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
        ],
        ignoredActionPaths: ["payload.someNonSerializableValue"],
        ignoredPaths: ["some.nested.nonSerializableValue"],
      },
    }),
  devTools: true,
});

export const persistor = persistStore(store);
export default { store, persistor };

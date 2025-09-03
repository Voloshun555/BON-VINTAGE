import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { favoriteSlice } from "./favoriteSlice/favoriteSlice";
import { filterSlice } from "./searchQuerySlice/searchQuerySlice";
import { viewOptionsSlice } from "./viewOptionsSlice/viewOptionsSlice";
import { basketSlice } from "./basket/basket";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorite"],
};

const rootReducer = combineReducers({
  favorite: favoriteSlice.reducer,
  filter: filterSlice.reducer,
  options: viewOptionsSlice.reducer,
  basket: basketSlice.reducer,
});

const persistUsersReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistUsersReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

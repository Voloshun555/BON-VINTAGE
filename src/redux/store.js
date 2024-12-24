import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { favoriteSlice } from "./favoriteSlice/favoriteSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorite"],
};

const rootReducer = combineReducers({
  favorite: favoriteSlice.reducer,
});

const persistUsersReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistUsersReducer,
});

export const persistor = persistStore(store);

export default store;

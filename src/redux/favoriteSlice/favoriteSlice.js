import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteList: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite(state, action) {
      const isExist = state.favoriteList.some(
        (item) => item === action.payload
      );
      if (!isExist) {
        state.favoriteList.push(action.payload);
      }
    },
    removeFavorite(state, action) {
      state.favoriteList = state.favoriteList.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

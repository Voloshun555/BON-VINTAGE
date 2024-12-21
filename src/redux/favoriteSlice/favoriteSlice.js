import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addFavorite(state, action) {
      const isExist = state.some((item) => item === action.payload);
      if (!isExist) {
        state.push(action.payload);
      }
    },
    removeFavorite(state, action) {
      return state.filter((item) => item !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

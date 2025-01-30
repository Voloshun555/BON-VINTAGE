import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortType: "",
  selectedCategory: null,
  selectedFilter: null,
};

export const viewOptionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectedFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
  },
});

export const { setSortType, setSelectedCategory, setSelectedFilter } =
  viewOptionsSlice.actions;

export const selectCatalogState = (state) => state.catalog;

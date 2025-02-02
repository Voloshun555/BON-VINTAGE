import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortType: "",
  selectedCategory: null,
  selectedFilter: null,
  selectedCategoryByFilter: [],
  selectedFilterByCategory: [],
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
    updateVisibleCategories: (state, action) => {
      state.selectedCategoryByFilter = action.payload;
    },
    updateVisibleFilterMaterials: (state, action) => {
      state.selectedFilterByCategory = action.payload;
    },
  },
});

export const {
  setSortType,
  setSelectedCategory,
  setSelectedFilter,
  updateVisibleCategories,
  updateVisibleFilterMaterials,
} = viewOptionsSlice.actions;

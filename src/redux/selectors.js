export const selectCatalogFilter = (state) => state.options.selectedFilter;
export const selectCatalogCategory = (state) => state.options.selectedCategory;
export const selectCatalogSortType = (state) => state.options.sortType;
export const searchQueryFilter = (state) => state.filter.searchQuery;
export const favoriteList = (state) => state.favorite.favoriteList;
export const updateCatalogVisibleList = (
    (state) => state.options.selectedCategoryByFilter
  );
  export const updateFilterMaterialsVisibleList = (
    (state) => state.options.selectedFilterByCategory
  )
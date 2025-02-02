import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateVisibleCategories, updateVisibleFilterMaterials } from "@/redux/viewOptionsSlice/viewOptionsSlice";
import {
  searchQueryFilter,
  selectCatalogCategory,
  selectCatalogFilter,
  selectCatalogSortType,
} from "@/redux/selectors";

export const useFilteredCards = (data) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(searchQueryFilter);
  const selectedFilter = useSelector(selectCatalogFilter);
  const selectedCategory = useSelector(selectCatalogCategory);
  const sortType = useSelector(selectCatalogSortType);

  const filteredData = useMemo(() => {
    if (!Array.isArray(data)) return [];
   
    return data.filter(({ title, description, country, category, material }) => {
      const query = searchQuery.toLowerCase();
      return (
        [title, description, country, category, material]
          .some((field) => field.toLowerCase().includes(query)) &&
        (!selectedCategory || category === selectedCategory) &&
        (!selectedFilter || material === selectedFilter)
      );
    });
  }, [data, searchQuery, selectedCategory, selectedFilter]);

  useEffect(() => {
    if (selectedFilter && !selectedCategory) {
      const categoriesForMaterial = [
        ...new Set(
          data
            .filter((item) => selectedFilter === item.material)
            .map((item) => item.category)
        ),
      ];
      if (categoriesForMaterial.length > 0) {
        dispatch(updateVisibleCategories(categoriesForMaterial));
      }
    }

    if (selectedCategory && !selectedFilter) {
      const materialsForCategory = [
        ...new Set(
          data
            .filter((item) => selectedCategory === item.category)
            .map((item) => item.material)
        ),
      ];
      if (materialsForCategory.length > 0) {
        dispatch(updateVisibleFilterMaterials(materialsForCategory));
      }
    }
  }, [data, selectedCategory, selectedFilter, dispatch]);


  const sortedAndFilteredData = useMemo(() => {
    if (!filteredData.length) return [];
    return [...filteredData].sort((a, b) => {
      switch (sortType) {
        case "newest":
          return new Date(b.createdAt) - new Date(a.createdAt);
        case "highPrice":
          return b.price - a.price;
        case "lowPrice":
          return a.price - b.price;
        default:
          return 0;
      }
    });
  }, [filteredData, sortType]);

  return sortedAndFilteredData;
};

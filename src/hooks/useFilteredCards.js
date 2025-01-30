import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  searchQueryFilter,
  selectCatalogCategory,
  selectCatalogFilter,
  selectCatalogSortType,
} from "@/redux/selectors";

export const useFilteredCards = (data) => {
  const searchQuery = useSelector(searchQueryFilter);
  const selectedFilter = useSelector(selectCatalogFilter);
  const selectedCategory = useSelector(selectCatalogCategory);
  const sortType = useSelector(selectCatalogSortType);

  const filteredData = useMemo(() => {
    if (!Array.isArray(data)) return [];

    return data.filter(({ title, description, country, category, material }) => {
      const query = searchQuery.toLowerCase();
      return [title, description, country, category, material]
        .some((field) => field.toLowerCase().includes(query)) &&
        (!selectedCategory || category === selectedCategory) &&
        (!selectedFilter || material === selectedFilter);
    });
  }, [data, searchQuery, selectedCategory, selectedFilter]);

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
/* eslint-disable react/prop-types */
import { Card } from "@/components/Catalog/Card/Card.jsx";
import { useFavorites } from "@/hooks/useFavorites";
import s from "./CardList.module.scss";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export const CardList = ({
  data,
  isLoading,
  isError,
  sortType,
  selectedCategory,
  selectedFilter,
}) => {
  console.log(selectedCategory);
  const { isFavorite, addFavoriteList, removeFavoriteList } = useFavorites();
  const searchQuery = useSelector((state) => state.filter.searchQuery);
  const filteredData = useMemo(() => {
    if (!data || !Array.isArray(data)) return [];
    return data
      .filter((item) => {
        const query = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.country.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.material.toLowerCase().includes(query)
        );
      })
      .filter((item) => {
        return selectedCategory ? item.category === selectedCategory : true;
      })
      .filter((item) => {
        return selectedFilter ? item.material === selectedFilter : true;
      });
  }, [data, searchQuery, selectedCategory, selectedFilter]);

  const sortedAndFilteredData = useMemo(() => {
    if (!filteredData || !Array.isArray(filteredData)) return [];
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

  return (
    <section className={s.container}>
      <ul className={s.containerCards}>
        {isLoading && <div>...Loading</div>}
        {isError && <div>...Error</div>}
        {!isLoading && !isError && sortedAndFilteredData.length > 0 ? (
          sortedAndFilteredData.map(
            ({ image, country, id, price, title, description }) => (
              <Card
                key={id}
                id={id}
                image={image}
                country={country}
                price={price}
                title={title}
                description={description}
                addFavoriteList={addFavoriteList}
                removeFavoriteList={removeFavoriteList}
                isFavorite={isFavorite(id)}
              />
            )
          )
        ) : (
          <div className={s.emptyMessage}>Категорія відсутня</div>
        )}
      </ul>
    </section>
  );
};

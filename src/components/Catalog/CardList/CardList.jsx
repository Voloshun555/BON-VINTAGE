/* eslint-disable react/prop-types */
import { Card } from "@/components/Catalog/Card/Card.jsx";

import { useFavorites } from "@/hooks/useFavorites";

import s from "./CardList.module.scss";


export const CardList = ({ data, isLoading, isError, sortType }) => {
  const { isFavorite, addFavoriteList, removeFavoriteList } = useFavorites();

  const sortTypePrice = () => {
    if (!data || !Array.isArray(data)) return [];
    switch (sortType) {
      case "newest":
        return data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "highPrice":
        return data.sort((a, b) => b.price - a.price);
      case "lowPrice":
        return data.sort((a, b) => a.price - b.price);
      default:
        return data;
    }
  };

  return (
    <section className={s.container}>
      <ul className={s.containerCards}>
        {isLoading && <div>...Loading</div>}
        {isError && <div>...Error</div>}
        {!isLoading &&
          !isError &&
          sortTypePrice().map(
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
          )}
      </ul>
    </section>
  );
};

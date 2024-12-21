
import { Card } from "@/components/Catalog/Card/Card.jsx";
import { useProducts } from "@/hooks/useProducts";
import { useFavorites } from "@/hooks/useFavorites"; 

import s from "./CardList.module.scss";

export const CardList = () => {
  const { data, isLoading, isError } = useProducts(12);
  const { isFavorite, addFavoriteList, removeFavoriteList } = useFavorites();

  return (
    <section className={s.container}>
      <ul className={s.containerCards}>
        {isLoading && <div>...Loading</div>}
        {isError && <div>...Error</div>}
        {!isLoading &&
          !isError &&
          data.map(({ image, country, id, price, title, description }) => (
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
          ))}
      </ul>
    </section>
  );
};

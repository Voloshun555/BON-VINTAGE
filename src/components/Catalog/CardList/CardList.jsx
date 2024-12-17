/* eslint-disable react/jsx-key */
import { Card } from "@/components/Catalog/Card/Card.jsx";

import s from "./CardList.module.scss"
import { useProducts } from "@/hooks/useProducts";

export const CardList = () => {

  const { data, isLoading, isError } = useProducts(12);
  
    if (isLoading) {
      return <div>...Loading</div>;
    }
    if (!isError) {
      <div>...Error</div>;
    }
  return (
    <section className={s.container}>
      <ul className={s.containerCards}>
        {data.map(({ image, country, id, price, title, description }) => (
          <Card
            id={id}
            image={image}
            country={country}
            price={price}
            title={title}
            description={description}
          />
        ))}
      </ul>
    </section>
  );
};

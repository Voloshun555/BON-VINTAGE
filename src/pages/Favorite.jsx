/* eslint-disable react/prop-types */
import { CardList } from "@/components/Catalog/CardList/CardList";
import { useSelector } from "react-redux";

import s from "./Home.module.scss";

const Favorite = ({ data, isLoading, isError }) => {
  const favoriteList = useSelector((state) => state.favorite.favoriteList);
  const favoriteItems = data ? data.filter((item) => favoriteList.includes(item.id)) : [];
  
  return (
    <section className={s.containerFavorite}>
      <div className={s.container}>
        <CardList
          data={favoriteItems}
          isLoading={isLoading}
          isError={isError}
          navigate={null}
        />
      </div>
    </section>
  );
};
export default Favorite;

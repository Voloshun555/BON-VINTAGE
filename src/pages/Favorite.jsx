/* eslint-disable react/prop-types */
import { CardList } from "@/components/Catalog/CardList/CardList";
import { useSelector } from "react-redux";

import s from "./Home.module.scss";
import { favoriteList } from "@/redux/selectors";

const Favorite = ({ data, isLoading, isError }) => {
  const favoriteListItems = useSelector(favoriteList);
  const favoriteItems = data ? data.filter((item) => favoriteListItems.includes(item.id)) : [];
  
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

import { CardList } from "@/components/Catalog/CardList/CardList";
import { useProducts } from "@/hooks/useProducts";
import { useSelector } from "react-redux";

import s from "./Home.module.scss";

const Favorite = ({data, isLoading, isError}) => {
  const favorit = useSelector((state) => state.favorite.favoriteList);
  const faforitItem = data.filter((item) => favorit.includes(item.id));
  return (
    <section className={s.containerFavorite}>
      <CardList
        data={faforitItem}
        isLoading={isLoading}
        isError={isError}
        navigate={null}
      />
    </section>
  );
};
export default Favorite;

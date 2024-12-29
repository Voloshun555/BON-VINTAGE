import { CardList } from "@/components/Catalog/CardList/CardList";
import { useProducts } from "@/hooks/useProducts";
import { useSelector } from "react-redux";

import s from "./Home.module.scss";

const Favorite = () => {
  const { data = [], isLoading, isError } = useProducts(12);
  const favorit = useSelector((state) => state.favorite);
  const faforitItem = data.filter((item) => favorit.includes(item.id));
  return (
    <section className={s.containerFavorite}>
      <CardList data={faforitItem} isLoading={isLoading} isError={isError} navigate = {null} />
    </section>
  );
};
export default Favorite;

import { CardList } from "@/components/Catalog/CardList/CardList";
import { useProducts } from "@/hooks/useProducts";
import s from "./Home.module.scss";
import { useSelector } from "react-redux";


const Favorite = () => {
  const { data, isLoading, isError } = useProducts(12);
  const favorit = useSelector((state) => state.favorite);

  const faforitItem = data.filter((item) => favorit.includes(item.id));
console.log(favorit)



  return (
    <section className={s.containerFavorite}>
      <CardList data={faforitItem} isLoading={isLoading} isError={isError} />
    </section>
  );
}
export default Favorite;
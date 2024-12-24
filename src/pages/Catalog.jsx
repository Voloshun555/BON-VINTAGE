import { CardSlide } from "@/components/CardSlide/CardSlide";
import { CardList } from "@/components/Catalog/CardList/CardList";
import { Categorizer } from "@/components/Categorizer/Categorizer";
import { useProducts } from "@/hooks/useProducts";
import s from "@/scss/base/shared.module.scss";

const Catalog = () => {
  const { data, isLoading, isError } = useProducts();

  return (
    <div>
      <CardSlide />
      <div className={s.containerCategorizer}>
        <Categorizer />
        <CardList data={data} isLoading={isLoading} isError={isError} />
      </div>
    </div>
  );
};
export default Catalog;

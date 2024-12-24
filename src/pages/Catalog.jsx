import { CardSlide } from "@/components/CardSlide/CardSlide";
import { CardList } from "@/components/Catalog/CardList/CardList";
import { Categorizer } from "@/components/Categorizer/Categorizer";
import { useProducts } from "@/hooks/useProducts";
import s from "@/scss/base/shared.module.scss";
import { useState } from "react";

const Catalog = () => {
  const { data, isLoading, isError } = useProducts(12);
  const [sortType, setSortType] = useState();

  return (
    <div>
      <CardSlide />
      <div className={s.containerCategorizer}>
        <Categorizer onSortChange={setSortType} />
        <CardList
          data={data}
          isLoading={isLoading}
          isError={isError}
          sortType={sortType}
        />
      </div>
    </div>
  );
};
export default Catalog;

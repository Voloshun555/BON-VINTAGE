/* eslint-disable react/prop-types */
import { CardSlide } from "@/components/CardSlide/CardSlide";
import { CardList } from "@/components/Catalog/CardList/CardList";
import { Categorizer } from "@/components/Categorizer/Categorizer";

import s from "@/scss/base/shared.module.scss";
import { useMediaQuery } from "react-responsive";
import { MTSelect } from "@/components/MTSelect/MTSelect";

const Catalog = ({ data, isLoading, isError }) => {
  const isMobile = useMediaQuery({ maxWidth: 1439 });

  return (
    <div>
      <CardSlide />
      <div className={s.containerCategorizer}>
        {!isMobile ? <Categorizer className={s.categorizer} /> : <MTSelect />}
        <CardList data={data} isLoading={isLoading} isError={isError} />
      </div>
    </div>
  );
};
export default Catalog;

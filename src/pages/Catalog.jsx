import { CardSlide } from "@/components/CardSlide/CardSlide";
import { CardList } from "@/components/Catalog/CardList/CardList";
import { Categorizer } from "@/components/Categorizer/Categorizer";
import s from "@/scss/base/shared.module.scss";

const Catalog = () => {
  return (
    <div>
        <CardSlide />
      <div className={s.containerCategorizer}>
        <Categorizer />
        <CardList />
      </div>
    </div>
  );
};
export default Catalog;

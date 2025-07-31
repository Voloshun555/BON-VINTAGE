
import { Categories } from "@/components/Сategories/Сategories.jsx";
import { FilterMaterials } from "@/components/FilterMaterials/FilterMaterials.jsx";
import { Sort } from "@/components/Sort/Sort.jsx";
import s from "./Categorizer.module.scss";

export const Categorizer = () => {
  return (
    <section className={s.categorizer}>
      <Sort  />
      <Categories />
      <FilterMaterials />
    </section>
  );
};

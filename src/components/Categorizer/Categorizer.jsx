
import { Categories } from "@/components/Сategories/Сategories.jsx";
import { FilterMaterials } from "@/components/FilterMaterials/FilterMaterials.jsx";
import { Sort } from "@/components/Sort/Sort.jsx";

export const Categorizer = () => {
  return (
    <section>
      <Sort  />
      <Categories />
      <FilterMaterials />
    </section>
  );
};

/* eslint-disable react/prop-types */
import { Сategories } from "@/components/Сategories/Сategories.jsx";
import { Filter } from "@/components/Filter/Filter.jsx";
import { Sort } from "@/components/Sort/Sort.jsx";

export const Categorizer = () => {
  return (
    <section>
      <Sort  />
      <Сategories />
      <Filter />
    </section>
  );
};

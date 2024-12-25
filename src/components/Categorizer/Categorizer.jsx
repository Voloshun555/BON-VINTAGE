/* eslint-disable react/prop-types */
import { Сategories } from "@/components/Сategories/Сategories.jsx";
import { Filter } from "@/components/Filter/Filter.jsx";
import { Sort } from "@/components/Sort/Sort.jsx";


export const Categorizer = ({ onSortChange }) => {
  return (
    <section>
      <Sort onSortChange={onSortChange} />
      <Сategories />
      <Filter />
    </section>
  );
};

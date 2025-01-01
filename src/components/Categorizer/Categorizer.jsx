/* eslint-disable react/prop-types */
import { Сategories } from "@/components/Сategories/Сategories.jsx";
import { Filter } from "@/components/Filter/Filter.jsx";
import { Sort } from "@/components/Sort/Sort.jsx";

export const Categorizer = ({ onSortChange, onCategoryChange, onFilterChange }) => {
  return (
    <section>
      <Sort onSortChange={onSortChange} />
      <Сategories onCategoryChange={onCategoryChange} />
      <Filter onFilterChange={onFilterChange} />
    </section>
  );
};

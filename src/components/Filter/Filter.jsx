/* eslint-disable react/prop-types */
import { materials } from "@/fakeApi.js";
import shared from "@/scss/base/shared.module.scss";
import { useState } from "react";

import s from "./Filter.module.scss"

export const Filter = ({onFilterChange}) => {
  const [selectedFilter, setSelectedFilter] = useState()


  const handleFilterClik = (filter) => {
    setSelectedFilter(filter === selectedFilter ? null : filter);
    onFilterChange(filter);
  }
console.log(handleFilterClik);
  return (
    <div>
      <div className={shared.ContainerForTitle}>
        <h3>Фільтрувати</h3>
      </div>

      <ul className={shared.grupCategories}>
        {materials.map((item) => (
          <li
            key={item}
            className={`${shared.listCategories} ${
              selectedFilter === item ? s.active : ""
            }`}
            onClick={() => handleFilterClik(item)}
          >
            {item}
          </li>
        ))}
        <li
          
          className={`${shared.listCategories}`}
          onClick={() => handleFilterClik(null)}
        >
          скинути
        </li>
      </ul>
    </div>
  );
};

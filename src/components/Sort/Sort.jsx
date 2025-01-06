/* eslint-disable react/prop-types */
import { useState } from "react";
import s from "./Sort.module.scss";
import shared from "@/scss/base/shared.module.scss";
import { sortOptions } from "@/fakeApi.js";

export const Sort = ({ onSortChange }) => {
  const [selectedSort, setSelectedSort] = useState();

  const handleSortChange = (sortType) => {
    setSelectedSort(sortType);
    onSortChange(sortType);
  };

  return (
    <div>
      <div className={shared.ContainerForTitle}>
        <p className={s.sort}>Сортувати</p>
      </div>
      <ul className={shared.grupCategories}>
        {sortOptions.map(({ value, label }) => (
          <li
            key={value}
            className={`${shared.listCategories} ${
              selectedSort === value ? s.active : ""
            }`}
            onClick={() => handleSortChange(value)}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

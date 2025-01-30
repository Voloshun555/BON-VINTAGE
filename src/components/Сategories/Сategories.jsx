/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { categories } from "@/fakeApi.js";
import shared from "@/scss/base/shared.module.scss";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { setSelectedCategory } from "@/redux/viewOptionsSlice/viewOptionsSlice";

import s from "./Categories.module.scss";

export const Сategories = () => {
  const [activeCategories, setActiveCategories] = useState();

  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    setActiveCategories(category);
    dispatch(setSelectedCategory(category));
  };

  return (
    <div>
      <div className={shared.ContainerForTitle}>
        <h3>Катигорії</h3>
      </div>
      <ul className={shared.grupCategories}>
        {categories.map((item) => (
          <li
            key={item}
            className={`${shared.listCategories} ${
              activeCategories === item ? s.active : ""
            }`}
            onClick={() => handleCategoryClick(item)}
          >
            {item}
          </li>
        ))}
        <li
          className={`${shared.listCategories} ${shared.resetButton}`}
          onClick={() => handleCategoryClick(null)}
        >
          Скинути фільтр
        </li>
      </ul>
    </div>
  );
};

/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { categories } from "@/fakeApi.js";
import shared from "@/scss/base/shared.module.scss";
import { useState } from "react";


import s from './Categories.module.scss'

export const Сategories = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    onCategoryChange(category);
  };

    const handleReset = () => {
      setSelectedCategory(null);
      onCategoryChange(null);
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
              selectedCategory === item ? s.active : ""
            }`}
            onClick={() => handleCategoryClick(item)}
          >
            {item}
          </li>
        ))}
        <li
          className={`${shared.listCategories} ${shared.resetButton}`}
          onClick={handleReset}
        >
          Скинути фільтр
        </li>
      </ul>
    </div>
  );
};

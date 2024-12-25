/* eslint-disable react-hooks/rules-of-hooks */
import { categories } from "@/fakeApi.js";
import shared from "@/scss/base/shared.module.scss";
import { useState } from "react";

export const Сategories = () => {
  const [getCategories, setCategories] = useState()
  console.log(getCategories);
  return (
    <div>
      <div className={shared.ContainerForTitle}>
        <h3>Катигорії</h3>
      </div>
      <ul className={shared.grupCategories}>
        {categories.map((item) => (
          <li
            key={item}
            className={shared.listCategories}
            onClick={() => setCategories(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

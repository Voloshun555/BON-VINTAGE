/* eslint-disable react/prop-types */
import { useState } from "react";
import s from "./Sort.module.scss";
import shared from "@/scss/base/shared.module.scss"

export const Sort = ({ onSortChange }) => {
  const [selectedSort, setSelectedSort] = useState("");

  const hendleSortChange = (sortType) => {
    setSelectedSort(sortType);
    onSortChange(sortType);
}


  return (
    <div>
      <div className={shared.ContainerForTitle}>
        <p className={s.sort}>Сортувати</p>
      </div>
      <ul className={shared.grupCategories}>
        <li
          className={`${shared.listCategories} ${
            selectedSort === "newest" ? s.active : ""
          }`}
          onClick={() => hendleSortChange("newest")}
        >
          За найновішими
        </li>
        <li
          className={`${shared.listCategories} ${
            selectedSort === "highPrice" ? s.active : ""
          }`}
          onClick={() => hendleSortChange("highPrice")}
        >
          За найбільшою ціною
        </li>
        <li
          className={`${shared.listCategories} ${
            selectedSort === "lowPrice" ? s.active : ""
          }`}
          onClick={() => hendleSortChange("lowPrice")}
        >
          За найменьшою ціною
        </li>
      </ul>
    </div>
  );
};

import s from "./Sort.module.scss";
import shared from "@/scss/base/shared.module.scss";
import { sortOptions } from "@/fakeApi.js";
import { useDispatch } from "react-redux";
import { setSortType } from "@/redux/viewOptionsSlice/viewOptionsSlice";
import { useState } from "react";

export const Sort = () => {
  const [activeSort, setActiveSort] = useState(null);
  const dispatch = useDispatch();

  const handleSortChange = (sortType) => {
    setActiveSort(sortType);
    dispatch(setSortType(sortType));
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
              activeSort === value ? s.active : ""
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

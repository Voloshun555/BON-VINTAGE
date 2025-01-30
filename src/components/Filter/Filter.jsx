import { materials } from "@/fakeApi.js";
import shared from "@/scss/base/shared.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedFilter } from "@/redux/viewOptionsSlice/viewOptionsSlice";
import s from "./Filter.module.scss"

export const Filter = () => {
  const [activeFilter, setActiveFilter] = useState()
  const dispatch = useDispatch();

  const handleFilterClik = (filter) => {
    setActiveFilter(filter)
    dispatch(setSelectedFilter(filter))
  }

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
              activeFilter === item ? s.active : ""
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

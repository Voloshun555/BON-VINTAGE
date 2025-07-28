import { materials } from "@/fakeApi.js";
import shared from "@/scss/base/shared.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateVisibleCategories,
  setSelectedFilter,
} from "@/redux/viewOptionsSlice/viewOptionsSlice";
import s from "./FilterMaterials.module.scss";
import { updateFilterMaterialsVisibleList } from "@/redux/selectors";

export const FilterMaterials = () => {
  const [activeFilter, setActiveFilter] = useState();
  const [disableMaterials, setfDisableMaterials] = useState([]);
  const isCategori = useSelector(updateFilterMaterialsVisibleList);

  const dispatch = useDispatch();

  const handleFilterClik = (filter) => {
    setActiveFilter(filter);
    dispatch(updateVisibleCategories(filter));
    dispatch(setSelectedFilter(filter));
  };
  useEffect(() => {
    if (isCategori && isCategori.length > 0) {
      const FilterMaterials = materials.filter(
        (item) => !isCategori.includes(item)
      );
      setfDisableMaterials(FilterMaterials);
    } else {
      setfDisableMaterials([]);
    }
  }, [isCategori]);


  return (
    <div>
      <div className={shared.ContainerForTitle}>
        <h3 className={s.title}>Фільтрувати</h3>
      </div>

      <ul className={shared.grupCategories}>
        {materials.map((item) => (
          <li
            key={item}
            className={`${shared.listCategories} ${
              activeFilter === item ? shared.active : ""
            } ${
              disableMaterials.length > 0 && disableMaterials.includes(item)
                ? s.disabled
                : ""
            } `}
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

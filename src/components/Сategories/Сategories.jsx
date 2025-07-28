import { categories } from "@/fakeApi.js";
import shared from "@/scss/base/shared.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory, updateVisibleFilterMaterials } from "@/redux/viewOptionsSlice/viewOptionsSlice";

import s from "./Categories.module.scss";
import { updateCatalogVisibleList } from "@/redux/selectors";

export const Categories = () => {
  const [activeCategories, setActiveCategories] = useState(null);
  const [disableCategori, setDisableCategori] = useState([]);
  const isMaterials = useSelector(updateCatalogVisibleList);
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    setActiveCategories(category);
    dispatch(updateVisibleFilterMaterials(category))
    dispatch(setSelectedCategory(category));
  };

  useEffect(() => {
    if (isMaterials && isMaterials.length > 0) {
      const categoriesItems = categories.filter(
        (item) => !isMaterials.includes(item)
      );
      setDisableCategori(categoriesItems);
    } else {
      setDisableCategori([]);
    }
  }, [isMaterials]);

  return (
    <div>
      <div className={shared.ContainerForTitle}>
        <h3 className={s.title}>Категорії</h3>
      </div>
      <ul className={shared.grupCategories}>
        {categories.map((item) => (
          <li
            key={item}
            className={`${shared.listCategories} ${
              activeCategories === item ? shared.active : ""
            } 
              ${
                disableCategori.length > 0 && disableCategori.includes(item)
                  ? s.disabled
                  : ""
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

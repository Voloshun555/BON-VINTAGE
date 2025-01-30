/* eslint-disable react/prop-types */
import Select from "react-select";
import { useDispatch } from "react-redux";
import {
  setSelectedCategory,
  setSelectedFilter,
  setSortType,
} from "@/redux/viewOptionsSlice/viewOptionsSlice";
import { sortOptions, categories, materials } from "@/fakeApi.js";

import s from "./MTSelect.module.scss";

export const MTSelect = () => {
  const dispatch = useDispatch();

  const handleCategoryClick = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : null;
    dispatch(setSelectedCategory(value));
  };

  const handleFilterClick = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : null;
    dispatch(setSelectedFilter(value));
  };

  const handleSortChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : null;
    dispatch(setSortType(value));
  };
  return (
    <section className={s.container}>
      <form className={s.form}>
        <div className={s.wrapSelect}>
          <label className={s.label}>
            <p>Сортувати</p>
            <Select
              classNamePrefix="custom-select"
              options={sortOptions}
              isClearable={true}
              isSearchable={true}
              placeholder="Оберіть тип сортування"
              onChange={handleSortChange}
            />
          </label>
        </div>
        <div className={s.wrapSelect}>
          <label className={s.label}>
            <p>Катигорії</p>
            <Select
              classNamePrefix="custom-select"
              options={categories.map((item) => ({ label: item, value: item }))}
              isClearable={true}
              isSearchable={true}
              placeholder="Оберіть категорію"
              onChange={handleCategoryClick}
            />
          </label>
        </div>
        <div className={s.wrapSelect}>
          <label className={s.label}>
            <p>Фільтрувати</p>
            <Select
              classNamePrefix="custom-select"
              options={materials.map((item) => ({ value: item, label: item }))}
              isClearable={true}
              isSearchable={true}
              placeholder="Оберіть матеріал"
              onChange={handleFilterClick}
            />
          </label>
        </div>
      </form>
    </section>
  );
};

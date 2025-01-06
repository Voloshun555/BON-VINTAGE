/* eslint-disable react/prop-types */
import Select from "react-select";
import { sortOptions, categories, materials } from "@/fakeApi.js";
import s from "./MTSelect.module.scss";
import { useState } from "react";

export const MTSelect = ({
  onSortChange,
  onCategoryChange,
  onFilterChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const handleCategoryClick = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : null;
    setSelectedCategory(value);
    onCategoryChange(value);
  };

  const handleFilterClick = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : null;
    setSelectedFilter(value);
    onFilterChange(value);
  };

  const handleSortChange = (selectedOption) => {
    onSortChange(selectedOption ? selectedOption.value : null);
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
              value={
                categories.find((item) => item === selectedCategory)
                  ? { label: selectedCategory, value: selectedCategory }
                  : null
              }
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
              value={
                materials.find((item) => item === selectedFilter)
                  ? { label: selectedFilter, value: selectedFilter }
                  : null
              }
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

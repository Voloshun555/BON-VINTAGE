/* eslint-disable react/prop-types */
import Select from "react-select";
import { sortOptions, categories, materials } from "@/fakeApi.js";
import s from "./MTSelect.module.scss";
import { useState } from "react";


// eslint-disable-next-line no-unused-vars
export const MTSelect = ({ onSortChange, onCategoryChange, onFilterChange }) => {
 const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    onCategoryChange(category);
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
              options={categories.map((item) => ({label: item, value: item}))}
              value={selectedCategory}
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
              options={materials}
              isClearable={true}
              isSearchable={true}
              placeholder="Оберіть матеріал"
            />
          </label>
        </div>
      </form>
    </section>
  );
};

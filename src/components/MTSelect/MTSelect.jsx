import Select from "react-select";
import { useDispatch } from "react-redux";
import {
  setSelectedCategory,
  setSelectedFilter,
  setSortType,
} from "@/redux/viewOptionsSlice/viewOptionsSlice";
import { sortOptions, categories, materials } from "@/fakeApi.js";

import s from "./MTSelect.module.scss";
import "./FilterCastomSelect.scss";

export const MTSelect = () => {
  const dispatch = useDispatch();

  const handleCategoryClick = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : null;
    dispatch(setSelectedCategory(value));
  };

  const handleCombinedChange = (selectedOption) => {
    if (!selectedOption) return;
    const { value, type } = selectedOption;
    if (type === "sort") {
      dispatch(setSortType(value));
    } else if (type === "filter") {
      dispatch(setSelectedFilter(value));
    }
  };

  const combinedOptions = [
    {
      label: "Сортування",
      options: sortOptions.map((item) => ({
        ...item,
        type: "sort",
      })),
    },
    {
      label: "Матеріали",
      options: materials.map((item) => ({
        label: item,
        value: item,
        type: "filter",
      })),
    },
  ];

  return (
    <section className={s.container}>
      <form className={s.form}>
        <div className={s.wrapSelect}>
          <label className={s.label}>
            <Select
              classNamePrefix="custom-select"
              options={categories.map((item) => ({ label: item, value: item }))}
              isClearable
              menuIsOpen={true}
              isSearchable={false}
              components={{ DropdownIndicator: () => null }}
              placeholder="Категорії"
              onChange={handleCategoryClick}
            />
          </label>
        </div>
        <div className={s.wrapSelect}>
          <label className={s.label}>
            <Select
              classNamePrefix="custom-select"
              options={combinedOptions}
              isClearable
              isSearchable={false}
              components={{ DropdownIndicator: () => null }}
              placeholder="Фільтрувати"
              onChange={handleCombinedChange}
            />
          </label>
        </div>
      </form>
    </section>
  );
};

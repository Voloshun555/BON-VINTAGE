/* eslint-disable react/prop-types */
import { CardSlide } from "@/components/CardSlide/CardSlide";
import { CardList } from "@/components/Catalog/CardList/CardList";
import { Categorizer } from "@/components/Categorizer/Categorizer";
import { useState } from "react";


import s from "@/scss/base/shared.module.scss";
import { useMediaQuery } from "react-responsive";
import { MTSelect } from "@/components/MTSelect/MTSelect";

const Catalog = ({data, isLoading, isError}) => {
  const [sortType, setSortType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  
  const isMobile = useMediaQuery({ maxWidth: 1439 });
  

  return (
    <div>
      <CardSlide />
      <div className={s.containerCategorizer}>
        {!isMobile ? (
          <Categorizer
            className={s.categorizer}
            onSortChange={setSortType}
            onCategoryChange={setSelectedCategory}
            onFilterChange={setSelectedFilter}
          />
        ) : (
          <MTSelect
            onSortChange={setSortType}
            onCategoryChange={setSelectedCategory}
            onFilterChange={setSelectedFilter}
          />
        )}

        <CardList
          data={data}
          isLoading={isLoading}
          isError={isError}
          sortType={sortType}
          selectedCategory={selectedCategory}
          selectedFilter={selectedFilter}
        />
      </div>
    </div>
  );
};
export default Catalog;

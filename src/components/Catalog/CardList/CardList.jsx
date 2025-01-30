/* eslint-disable react/prop-types */
import { Card } from "@/components/Catalog/Card/Card.jsx";
import { useFavorites } from "@/hooks/useFavorites";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { Modal } from "@/components/Modal/Modal";
import { Pagination } from "@/components/Pagination/Pagination";
import {
  searchQueryFilter,
  selectCatalogCategory,
  selectCatalogFilter,
  selectCatalogSortType,
} from "@/redux/selectors";

import s from "./CardList.module.scss";

export const CardList = ({ data, isLoading, isError }) => {
  
  const [isOpenModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(12);

  const { isFavorite, addFavoriteList, removeFavoriteList } = useFavorites();

  const searchQuery = useSelector(searchQueryFilter);
  const selectedFilter = useSelector(selectCatalogFilter);
  const selectedCategory = useSelector(selectCatalogCategory);
  const sortType = useSelector(selectCatalogSortType);

  const toggleModal = (item = null) => {
    setOpenModal(!isOpenModal);
    setSelectedItem(item);
  };

  const filteredData = useMemo(() => {
    if (!Array.isArray(data)) return [];

    return data.filter((item) => {
      const query = searchQuery.toLowerCase();
      const matchesQuery = [
        item.title,
        item.description,
        item.country,
        item.category,
        item.material,
      ].some((field) => field.toLowerCase().includes(query));

      const matchesCategory = selectedCategory
        ? item.category === selectedCategory
        : true;
      const matchesFilter = selectedFilter
        ? item.material === selectedFilter
        : true;

      return matchesQuery && matchesCategory && matchesFilter;
    });
  }, [data, searchQuery, selectedCategory, selectedFilter]);

  const sortedAndFilteredData = useMemo(() => {
    if (!filteredData || !Array.isArray(filteredData)) return [];
    return [...filteredData].sort((a, b) => {
      switch (sortType) {
        case "newest":
          return new Date(b.createdAt) - new Date(a.createdAt);
        case "highPrice":
          return b.price - a.price;
        case "lowPrice":
          return a.price - b.price;
        default:
          return 0;
      }
    });
  }, [filteredData, sortType]);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = sortedAndFilteredData.slice(
    firstCardIndex,
    lastCardIndex
  );

  return (
    <div className={s.container}>
      {!isOpenModal ? (
        <>
          <ul className={s.containerCards}>
            {isLoading && <div>...Loading</div>}
            {isError && <div>...Error</div>}
            {!isLoading &&
              !isError &&
              currentCards.map(
                ({
                  mainImage,
                  country,
                  id,
                  price,
                  title,
                  description,
                  gallery,
                  category,
                  material,
                }) => (
                  <Card
                    key={id}
                    id={id}
                    image={mainImage}
                    country={country}
                    price={price}
                    title={title}
                    description={description}
                    addFavoriteList={addFavoriteList}
                    removeFavoriteList={removeFavoriteList}
                    isFavorite={isFavorite(id)}
                    onClick={() =>
                      toggleModal({
                        mainImage,
                        country,
                        id,
                        price,
                        title,
                        description,
                        gallery,
                        category,
                        material,
                      })
                    }
                  />
                )
              )}
          </ul>
          {currentCards.length > 0 ? (
            <Pagination
              totalCards={sortedAndFilteredData.length}
              cardsPerPage={cardsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : null}
        </>
      ) : (
        <Modal onClose={toggleModal} data={selectedItem} />
      )}
    </div>
  );
};

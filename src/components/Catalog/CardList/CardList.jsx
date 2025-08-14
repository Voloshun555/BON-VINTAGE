/* eslint-disable react/prop-types */
import { Card } from "@/components/Catalog/Card/Card.jsx";
import { useFavorites } from "@/hooks/useFavorites";
import { useState } from "react";
import { Modal } from "@/components/Modal/Modal";
import { Pagination } from "@/components/Pagination/Pagination";
import { useFilteredCards } from "@/hooks/useFilteredCards";

import { Spiner } from "@/components/Spiner/Spiner";

import shared from "@/scss/base/shared.module.scss";
import s from "./CardList.module.scss";

export const CardList = ({ data, isLoading, isError }) => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(12);

  const { isFavorite, addFavoriteList, removeFavoriteList } = useFavorites();

  const toggleModal = (item = null) => {
    setOpenModal(!isOpenModal);
    setSelectedItem(item);
  };

   const safeData = Array.isArray(data) ? data : [];
  const filteredData = useFilteredCards(safeData);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = filteredData.slice(firstCardIndex, lastCardIndex);

  return (
    <section>
      {!isOpenModal ? (
        <>
            {isLoading && (
              <div className={shared.center}>
                <Spiner />
              </div>
            )}
          <ul className={s.containerCards}>
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
              totalCards={filteredData.length}
              cardsPerPage={cardsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : null}
        </>
      ) : (
        <Modal onClose={toggleModal} data={selectedItem} />
      )}
    </section>
  );
};

/* eslint-disable react/prop-types */
import { useState } from "react";
import { FavoriteButton } from "@/components/FavoriteBtn/FavoriteButton";
import { Spiner } from "@/components/Spiner/Spiner";
import noImage from "/assets/images/noImage.png";
import s from "./Card.module.scss";

export const Card = ({
  image,
  price,
  title,
  description,
  id,
  addFavoriteList,
  removeFavoriteList,
  isFavorite,
  onClick,
}) => {
  const [isBascket, setIsBascket] = useState(false);
  const [isImgLoading, setIsImgLoading] = useState(true);

  const toggleBascket = () => {
    setIsBascket(!isBascket);
  };

  const handleFavoriteClick = () => {
    isFavorite ? removeFavoriteList(id) : addFavoriteList(id);
  };

  return (
    <li className={s.containerCard}>
      <div className={s.containerImg}>
        {isImgLoading && (
          <div className={s.imgLoader}>
            <Spiner />
          </div>
        )}

        <img
          className={s.catalogImg}
          src={image || noImage}
          alt={title || "Зображення продукту"}
          onClick={onClick}
          onLoad={() => setIsImgLoading(false)}
          onError={(e) => {
            e.currentTarget.src = noImage;
            setIsImgLoading(false);
          }}
          style={isImgLoading ? { display: "none" } : {}}
        />

        <FavoriteButton
          buttonHeart={`${s.buttonHeart}`}
          iconHeart={s.iconHeart}
          isFavorite={isFavorite}
          onClick={handleFavoriteClick}
        />
      </div>

      <div className={s.item}>
        <h3 className={s.itemTitle}>{description}</h3>
        <p className={s.itemPrice}>{price} грн</p>
      </div>

      <button
        className={`${s.btnBascket} ${isBascket ? s.active : ""}`}
        aria-label="Додати до кошика"
        onClick={toggleBascket}
      >
        {isBascket ? "Видалити з кошика" : "Додати до кошику"}
      </button>
    </li>
  );
};

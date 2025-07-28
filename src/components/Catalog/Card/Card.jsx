/* eslint-disable react/prop-types */
import s from "./Card.module.scss";
import { FavoriteButton } from "@/components/FavoriteBtn/FavoriteButton";

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
   const handleFavoriteClick = () => {
     isFavorite ? removeFavoriteList(id) : addFavoriteList(id);
   };


  return (
    <li className={s.containerCard}>
      <div className={s.containerImg}>
        <img
          className={s.catalogImg}
          src={image}
          alt={title || "Зображення продукту"}
          onClick={onClick}
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
      <button className={s.btnBascket} aria-label="Додати до кошика">
        додати до кошику
      </button>
    </li>
  );
};

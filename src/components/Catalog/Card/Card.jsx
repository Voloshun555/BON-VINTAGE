/* eslint-disable react/prop-types */
import { CiHeart } from "react-icons/ci";
import s from "./Card.module.scss";

export const Card = ({
  image,
  country,
  price,
  title,
  description,
  id,
  addFavoriteList,
  removeFavoriteList,
  isFavorite,
}) => {
  const handleFavoriteClick = () => {
    isFavorite ? removeFavoriteList(id) : addFavoriteList(id);
  };

  return (
    <li className={s.containerCard}>
      <div className={s.containerImg}>
        <img className={s.catalogImg} src={image} alt="vase" />
        <button className={s.buttonHeard} onClick={handleFavoriteClick}>
          <CiHeart
            className={`${s.iconHeard} ${isFavorite ? s.iconHeardActive : ""}`}
          />
        </button>
      </div>
      <div>
        <ul className={s.item}>
          <li className={s.itemList}>
            <div className={s.itemDetails}>
              <h3>{description}</h3>
              <p>ціна: {price}</p>
            </div>
          </li>
          <li className={s.itemList}>{title}</li>
          <li className={s.itemList}>{country}</li>
        </ul>
      </div>
    </li>
  );
};

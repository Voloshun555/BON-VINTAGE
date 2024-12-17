import { CiHeart } from "react-icons/ci";

import s from "./Card.module.scss";
// eslint-disable-next-line react/prop-types
export const Card = ({ image, country, price, title, description }) => {
  return (
    <li className={s.containerCard}>
      <div className={s.containerImg}>
        <img className={s.catalogImg} src={image} alt="vase" />
        <CiHeart className={s.iconHeard} />
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

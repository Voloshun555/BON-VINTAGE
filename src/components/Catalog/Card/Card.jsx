import { CiHeart } from "react-icons/ci";
import vase from "@/assets/vase.webp";

import s from "./Card.module.scss";

export const Card = () => {
  return (
    <div className={s.containerCard}>
      <div className={s.containerImg}>
        <img className={s.catalogImg} src={vase} alt="vase" />
        <CiHeart className={s.iconHeard} />
      </div>
      <div>
        <ul className={s.item}>
          <li className={s.itemList}>
            <div className={s.itemDetails}>
              <h3>Коддлер для варіння яєць</h3>
              <p>22 000 ГРН</p>
            </div>
          </li>
          <li className={s.itemList}>King size Royal Worcester</li>
          <li className={s.itemList}>Англія</li>
        </ul>
      </div>
    </div>
  );
};

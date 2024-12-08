import { CiHeart } from "react-icons/ci";
import vase from "@/assets/vase.webp"

import s from "./Card.module.scss"

export const Card = () => {
  return (
    <div className={s.containerCard}>
      <div className={s.containerImg}>
        <img className={s.catalogImg} src={vase} alt="vase" />
        <CiHeart className={s.iconHeard} />
      </div>
      <div>
        <ul className={s.item}>
          <li className={s.itemList}>Коддлер для варіння</li>
          <li className={s.itemList}>22 000 ГРН</li>
          <li className={s.itemList}>King size Royal Worcester</li>
          <li className={s.itemList}>Англія</li>
        </ul>
      </div>
    </div>
  );
};

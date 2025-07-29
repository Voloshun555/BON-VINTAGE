
import { Icon } from "../Icon/Icon";
import s from "./Title.module.scss";


export const Title = () => {
  return (
    <div className={s.container}>
      <Icon id={"icon-with-star"} className={s.iconWithStar} />
      <h1 className={s.title}>
        Antique & Vintage <br /> Exclusive Collectibles
      </h1>
      <p className={s.historyItems}>
        Предмети з історією, які наповнюють ваш дім <br /> унікальністю та
        чарівністю
      </p>
    </div>
  );
};

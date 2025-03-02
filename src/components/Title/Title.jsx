import s from "./Title.module.scss";
import spriteSvg from "@/assets/svg/sprite.svg";

export const Title = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Antique & Vintage <br /> Exclusive Collectibles
      </h1>
      <p className={s.historyItems}>
        Предмети з історією, які наповнюють ваш дім <br /> унікальністю та
        чарівністю
      </p>
      <svg className={s.YourFavoIcon}>
        <use href={`${spriteSvg}#icon-your-favorites`} />{" "}
      </svg>
    </div>
  );
};

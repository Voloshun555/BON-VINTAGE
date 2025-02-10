import s from "./Title.module.scss";
import sdfg from "../../assets/yourfavorites.svg";

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
      <img className={s.YourFavoIcon} src={sdfg} alt="Your Favorites" />
    </div>
  );
};

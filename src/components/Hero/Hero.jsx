import image from "../../assets/images.jfif";
import s from "./Hero.module.scss";

export const Hero = () => {
  return (
    <div className={s.heroContainer}>
      <div className={s.hero}>
        <p className={s.logo}>(лого еще в разработке)</p>
        <h1 className={s.title}>BON VINTAGE</h1>
        <p className={s.description}>
          С другой стороны постоянное информационно-пропагандистское обеспечение
          нашей деятельности представляет собой интересный эксперимент проверки
          систем массового участия. Разнообразный и богатый опыт рамки и место
          обучения кадров способствует подготовке <br />{" "}
          <p className={s.bottomDescription}>
            и реализации направлений прогрессивного развития.
          </p>
        </p>
        <h2 className={s.logoTitle}>ANTIQUE & VINTAGE STORE</h2>
      </div>
      <img className={s.imageHero} src={image} alt="lion" />
    </div>
  );
};

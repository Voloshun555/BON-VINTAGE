// import image from "../../assets/images.jfif"
import s from "./Heder.module.scss";

export const Heder = () => {
  return (
    <heder className={s.heder}>
      <p className={s.copirated}>EST 2024</p>
      <nav>
        <ul className={s.grupList}>
          <li className={s.list}>Голона</li>
          <li className={s.list}>Каталог</li>
          <li className={s.list}>Про нас</li>
          <li className={s.list}>Увій</li>
          <li className={s.list}>Вподобані</li>
        </ul>
        <input className={s.search} type="text" />
      </nav>

      {/* <div className={s.hero}>
        <p className={s.logo}>(лого еще в разработке)</p>
        <h1 className={s.title}>BON VINTAGE</h1>
        <p className={s.description}>
          С другой стороны постоянное информационно-пропагандистское обеспечение
          нашей деятельности представляет собой интересный эксперимент проверки
          систем массового участия. Разнообразный и богатый опыт рамки и место
          обучения кадров способствует подготовке и реализации направлений
          прогрессивного развития.
              </p>
              <h2>ANTIQUE & VINTAGE STORE</h2>
      </div>
      <img className={s.imageHero} src={image} alt="lion" /> */}
    </heder>
  );
};

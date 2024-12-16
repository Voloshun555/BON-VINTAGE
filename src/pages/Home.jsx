import image from "../assets/images.jfif";
import s from "./Home.module.scss";

 const Home = () => {
  return (
   <section className={s.heroContainer}>
        <div className={s.hero}>
          <p className={s.logo}>(лого еще в разработке)</p>
          <h1 className={s.title}>BON VINTAGE</h1>
          <p className={s.description}>
            С другой стороны постоянное информационно-пропагандистское обеспечение
            нашей деятельности представляет собой интересный эксперимент проверки
            систем массового участия. Разнообразный и богатый опыт рамки и место
            обучения кадров способствует подготовке <br />
            <span className={s.bottomDescription}>
              и реализации направлений прогрессивного развития.
            </span>
          </p>
          <h2 className={s.logoTitle}>ANTIQUE & VINTAGE STORE</h2>
        </div>
        <img className={s.imageHero} src={image} alt="lion" />
      </section>
  );
};
export default Home;
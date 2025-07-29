import { Icon } from "@/components/Icon/Icon";
import iconSvg from "/assets/images/главная-картинка.jpg";
import { CardList } from "@/components/Catalog/CardList/CardList";
import { useMediaQuery } from "react-responsive";
import { Categorizer } from "@/components/Categorizer/Categorizer";
import { MTSelect } from "@/components/MTSelect/MTSelect";
import style from "@/scss/base/shared.module.scss";
import s from "./Home.module.scss";

// eslint-disable-next-line react/prop-types
const Home = ({ data, isLoading, isError }) => {
  const isMobile = useMediaQuery({ maxWidth: 1439 });
  return (
    <section>
      <div className={s.heroContainer}>
        <div className={s.hero}>
          <Icon id={"icon-logo"} className={s.logo} />
          <p className={s.description}>
            С другой стороны постоянное информационно-пропагандистское
            обеспечение нашей деятельности представляет собой интересный
            эксперимент проверки систем массового участия. Разнообразный и
            богатый опыт рамки и место обучения кадров способствует подготовке и
            реализации направлений прогрессивного развития.
          </p>
          <h2 className={s.logoTitle}>ANTIQUE & VINTAGE STORE</h2>
        </div>
        <img className={s.imageHero} src={iconSvg} alt="lion" />
      </div>
      <div className={style.containerCategorizer}>
             {!isMobile ? <Categorizer className={s.categorizer} /> : <MTSelect />}
             <CardList data={data} isLoading={isLoading} isError={isError} />
           </div>
    </section>
  );
};
export default Home;

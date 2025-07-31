
import { Icon } from "../Icon/Icon";
import { useMediaQuery } from "react-responsive";

import s from "./Footer.module.scss";

export const Footer = () => {


  const isMobile = useMediaQuery({ maxWidth: 833 });
  
  return (
    <footer className={s.footer}>
      <div className={s.containerFooter}>
        <nav>
          <div className={s.iconWrap}>
          <Icon id={'icon-e_etsy'} className={s.iconNav}/>
          <Icon id={'icon-insta'} className={s.iconNav}/>
          <Icon id={'icon-pinterest'} className={s.iconNav}/>
          </div>
          {!isMobile && (
            <ul className={s.navList}>
              <li className={s.listItem}>Про нас</li>
              <li className={s.listItem}>Контакти</li>
            </ul>
          )}
        </nav>
        <Icon id={'icon-BON'} className={s.logoFootert}/>
        <nav>
          {isMobile ? (
            <ul className={s.navList}>
              <li className={s.listItem}>Про доставку</li>
              <li className={s.listItem}>Способи оплати</li>
              <li className={s.listItem}>Контакти</li>
              <li className={s.listItem}>О нас</li>
            </ul>
          ) : (
            <ul className={s.navList}>
              <li className={s.listItem}>Про доставку</li>
              <li className={s.listItem}>Способи оплати</li>
              <li className={s.listItem}>Повернення та обмін</li>
            </ul>
          )}
        </nav>
      </div>
    </footer>
  );
};

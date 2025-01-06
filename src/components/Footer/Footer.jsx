import { FaInstagram } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

import s from "./Footer.module.scss";

export const Footer = () => {


  const isMobile = useMediaQuery({ maxWidth: 833 });
  
  return (
    <footer className={s.footer}>
      <div className={s.containerFooter}>
        <nav>
          <div className={s.iconWrap}>
            <FaRegPaperPlane className={s.iconNav} />
            <FaInstagram className={s.iconNav} />
          </div>
          {!isMobile && (
            <ul className={s.navList}>
              <li className={s.listItem}>Про нас</li>
              <li className={s.listItem}>Контакти</li>
            </ul>
          )}
        </nav>
        <p className={s.logoFootert}>BON</p>
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

import { Icon } from "../Icon/Icon";
import { useMediaQuery } from "react-responsive";
import { HashLink } from "react-router-hash-link";

import s from "./Footer.module.scss";

export const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 833 });

  return (
    <footer className={s.footer}>
      <div className={s.containerFooter}>
        <nav>
          <div className={s.iconWrap}>
            <Icon id={"icon-e_etsy"} className={s.iconNav} />
            <Icon id={"icon-insta"} className={s.iconNav} />
            <Icon id={"icon-pinterest"} className={s.iconNav} />
          </div>
          {!isMobile && (
            <ul className={s.navList}>
              <li className={s.listItem}>
                <HashLink to="/aboutUs#aboutUs">Про нас</HashLink>
              </li>
              <li className={s.listItem}>
                <HashLink to="/aboutUs#contacts">Контакти</HashLink>
              </li>
            </ul>
          )}
        </nav>
        <HashLink to={"/"}>
          <Icon id={"icon-BON"} className={s.logoFootert} />
        </HashLink>
        <nav>
          {isMobile ? (
            <ul className={s.navList}>
              <li className={s.listItem}>
                <HashLink to="/aboutUs#delivery">Про доставку</HashLink>
              </li>
              <li className={s.listItem}>
                <HashLink to="/aboutUs#delivery">Способи оплати</HashLink>
              </li>
              <li className={s.listItem}>
                <HashLink to="/aboutUs#contacts">Контакти</HashLink>
              </li>
              <li className={s.listItem}>
                <HashLink to="/aboutUs#aboutUs">Про нас</HashLink>
              </li>
            </ul>
          ) : (
            <ul className={s.navList}>
              <li className={s.listItem}>
                <HashLink to="/aboutUs#delivery">Про доставку</HashLink>
              </li>
              <li className={s.listItem}>
                <HashLink to="/aboutUs#delivery">Способи оплати</HashLink>
              </li>
              <li className={s.listItem}>
                <HashLink to="/aboutUs#delivery">Повернення та обмін</HashLink>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </footer>
  );
};

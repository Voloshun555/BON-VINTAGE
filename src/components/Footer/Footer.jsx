import { FaInstagram } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa";

import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.containerFooter}>
        <nav>
          <div>
            <FaRegPaperPlane className={s.iconNav} />
            <FaInstagram className={s.iconNav} />
          </div>
          <ul>
            <li>Про нас</li>
            <li>Контакти</li>
          </ul>
        </nav>

        <p className={s.logoFootert}>BON</p>
        <nav>
          <ul>
            <li>Про доставку</li>
            <li>Способи оплати</li>
            <li>Повернення та обмін</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { HashLink } from 'react-router-hash-link';
// import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import s from "./BurgerMenu.module.scss";
import { Icon } from "@/components/Icon/Icon";

const BurgerMenuModal = document.getElementById("MenuBurger");

export const BurgerMenu = ({ onClose, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return createPortal(
    <section className={`${s.menuWrapper} ${isOpen ? s.active : ""}`}>
      <div className={`${s.container} ${isOpen ? s.active : ""}`}>
        {/* <button className={s.closeButton} onClick={onClose}>
          <RxCross1 className={s.closeIcon} />
        </button> */}
        <nav className={s.burgerNav} onClick={onClose}>
          <ul className={s.itemNavLink}>
            <li>
              <NavLink to="/" className={s.navLink}>
                ГОЛОВНА
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" className={s.navLink}>
                КАТАЛОГ
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorite" className={s.navLink}>
                ВПОДОБАНІ
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs" className={s.navLink}>ПРО НАС</NavLink>
            </li>
            <li>
              <NavLink className={s.navLink}>УВІЙТИ</NavLink>
            </li>
          </ul>
        </nav>

        <div className={s.actions}>
          <Icon id={"icon-e_etsy"} className={s.icon} />
          <Icon id={"icon-insta"} className={s.icon} />
        </div>
        <HashLink  to="/aboutUs#delivery" className={`${s.navLink} ${s.textDeliveryLink}`} href="#delivery" onClick={onClose} >
          Про доставку та способи оплати
        </HashLink>
      </div>
    </section>,
    BurgerMenuModal
  );
};

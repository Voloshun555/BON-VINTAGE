import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  FaRegUser,
  FaRegHeart,
  FaRegPaperPlane,
  FaInstagram,
} from "react-icons/fa";
import { BsBasket3 } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import s from "./BurgerMenu.module.scss";

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
        <button className={s.closeButton} onClick={onClose}>
          <RxCross1 className={s.closeIcon} />
        </button>
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
              <NavLink className={s.navLink}>ПРО НАС</NavLink>
            </li>
            <li>
              <NavLink className={s.navLink}>УВІЙТИ</NavLink>
            </li>
          </ul>
        </nav>

        <div className={s.actions}>
          <FaRegUser className={s.icon} />
          <FaRegHeart className={s.icon} />
          <BsBasket3 className={s.icon} />
          <FaRegPaperPlane className={s.icon} />
          <FaInstagram className={s.icon} />
        </div>
      </div>
    </section>,
    BurgerMenuModal
  );
};

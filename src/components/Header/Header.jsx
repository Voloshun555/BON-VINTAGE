import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsBasket3 } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className={s.heder}>
      <div className={s.container}>
        <p className={s.logo}>BON VINTAGE</p>
        <nav>
          <ul className={s.navigation}>
            <li className={s.listNavigation}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${s.active} ${s.navLink}` : s.navLink
                }
              >
                ГОЛОВНА
              </NavLink>
            </li>
            <li className={s.listNavigation}>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  isActive ? `${s.active} ${s.navLink}` : s.navLink
                }
              >
                КАТАЛОГ
              </NavLink>
            </li>
            <li className={s.listNavigation}>ПРО НАС</li>
            <li className={s.listNavigation}>УВІЙ</li>

            <li className={s.listNavigation}>
              <NavLink
                to="/favorite"
                className={({ isActive }) =>
                  isActive ? `${s.active} ${s.navLink}` : s.navLink
                }
              >
                ВПОДАБАНІ
              </NavLink>
            </li>
          </ul>
          <div className={s.searchContainer}>
            <input className={s.search} type="text" placeholder="пошук" />
            <CiSearch className={s.searchIcon} />
          </div>
        </nav>
        <div className={s.socialLinks}>
          <FaRegPaperPlane className={s.iconNav} />
          <FaInstagram className={s.iconNav} />
        </div>
        <div className={s.userActions}>
          <FaRegUser className={s.iconNav} />
          <FaRegHeart className={s.iconNav} />
          <BsBasket3 className={s.iconNav} />
        </div>
      </div>
    </header>
  );
};

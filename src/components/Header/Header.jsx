import { FaRegUser, FaRegHeart, FaRegPaperPlane } from "react-icons/fa";
import { BsBasket3 } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import s from "./Header.module.scss";
import { setSearchQuery } from "@/redux/searchQuery/searchQuery";

export const Header = () => {
  const dispatch = useDispatch();
  const totalFavorite = useSelector((state) => state.favorite.length);
  const searchQuery = useSelector((state) => state.filter.searchQuery);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  }

  return (
    <header className={s.header}>
      <div className={s.container}>
        <p className={s.logo}>BON VINTAGE</p>
        <nav>
          <ul className={s.navigation}>
            {[
              { to: "/", label: "ГОЛОВНА" },
              { to: "/catalog", label: "КАТАЛОГ" },
              { to: "/favorite", label: "ВПОДОБАНІ" },
            ].map((link) => (
              <li key={link.to} className={s.listNavigation}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? `${s.active} ${s.navLink}` : s.navLink
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className={s.listNavigation}>ПРО НАС</li>
            <li className={s.listNavigation}>УВІЙ</li>
          </ul>
          <div className={s.searchContainer}>
            <input
              className={s.search}
              type="text"
              placeholder="Пошук"
              value={searchQuery}
              onChange={handleSearch}
            />
            <CiSearch className={s.searchIcon} />
          </div>
        </nav>
        <div className={s.socialLinks}>
          <FaRegPaperPlane className={s.iconNav} />
          <FaInstagram className={s.iconNav} />
        </div>
        <div className={s.userActions}>
          {[FaRegUser, FaRegHeart, BsBasket3].map((Icon, index) => (
            <div key={index} className={s.wrapIcon}>
              <Icon className={s.iconNav} />
              {Icon === FaRegHeart && totalFavorite > 0 && (
                <p className={s.totalFavorite}>{totalFavorite}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

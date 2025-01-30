import { FaRegUser, FaRegHeart, FaRegPaperPlane } from "react-icons/fa";
import { BsBasket3 } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import s from "./Header.module.scss";
import { setSearchQuery } from "@/redux/searchQuerySlice/searchQuerySlice";
import { useEffect, useState } from "react";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { useMediaQuery } from "react-responsive";
import { favoriteList, searchQueryFilter } from "@/redux/selectors";

export const Header = () => {
  const [isOpen, setOpen] = useState();

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalFavorite = useSelector(favoriteList).length;
  const searchQuery = useSelector(searchQueryFilter);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    if (location.pathname !== "/catalog") {
      navigate("/catalog");
    }
  };

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const isMobile = useMediaQuery({ maxWidth: 833 });

  useEffect(() => {
    if (!isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

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
            <form onSubmit={handleSumbit}>
              <input
                className={s.search}
                type="text"
                placeholder="Пошук"
                value={searchQuery}
                onChange={handleSearch}
              />
              <CiSearch className={s.searchIcon} />
            </form>
          </div>
        </nav>
        <div className={s.socialLinks}>
          <FaRegPaperPlane className={s.iconNav} />
          <FaInstagram className={s.iconNav} />
        </div>
        <div className={s.userActions}>
          {[FaRegUser, FaRegHeart, BsBasket3].map((Icon, index) => (
            <div
              key={index}
              className={s.wrapIcon}
              data-total={
                Icon === FaRegHeart && totalFavorite > 0 ? totalFavorite : ""
              }
            >
              <Icon className={s.iconNav} />
            </div>
          ))}
        </div>
        <button className={s.buttonBurger} onClick={toggleMenu}>
          {isOpen ? (
            <RxCross1 className={s.burgerIcon} />
          ) : (
            <CiMenuBurger className={s.burgerIcon} />
          )}
        </button>
      </div>
      {isOpen && <BurgerMenu onClose={toggleMenu} />}
    </header>
  );
};

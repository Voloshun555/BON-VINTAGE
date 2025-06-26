import { CiSearch } from "react-icons/ci";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setSearchQuery } from "@/redux/searchQuerySlice/searchQuerySlice";
import { useEffect, useState } from "react";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { useMediaQuery } from "react-responsive";
import { favoriteList, searchQueryFilter } from "@/redux/selectors";
import { Icon } from "../Icon/Icon";

import s from "./Header.module.scss";
import { navigatePages } from "@/navigate";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalFavorite = useSelector(favoriteList).length;
  const searchQuery = useSelector(searchQueryFilter);

  const handleSearch = (e) => {
    const query = e.target.value;
    dispatch(setSearchQuery(query));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (location.pathname !== "/catalog") {
      navigate("/catalog");
    }
    setIsSearchFocused(false)
  };

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const isMobileAndTablet = useMediaQuery({ maxWidth: 1439 });

  useEffect(() => {
    if (!isMobileAndTablet) {
      setOpen(false);
    }
  }, [isMobileAndTablet]);

  return (
   <header className={`${s.header} ${isSearchFocused ? s.searchActive : ""}`} >
      <div className={s.container}>
        <div className={s.wrapLogo}>
          <Icon id={"icon-BON"} className={s.logo} />
          <p className={s.desctopLogo}>VINTAGE</p>
        </div>
        <nav>
          <ul className={s.navigation}>
            {navigatePages.map((link) => (
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
            <li className={s.listNavigation}>УВІЙТИ</li>
          </ul>
          <div className={s.searchContainer}>
            <form onSubmit={handleSubmit}>
              <input
                className={s.search}
                type="text"
                placeholder="Пошук"
                value={searchQuery}
                onChange={handleSearch}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <button className={s.wrapIconSearch} type="submit" >
                <CiSearch className={s.searchIcon} />
              </button>
            </form>
          </div>
        </nav>
        <div className={s.wrapSocialUser}>
          <ul className={s.socialLinks}>
            <li>
              <a>
                <Icon id={"icon-e_etsy"} className={s.iconNav} />
              </a>
            </li>
            <li>
              <a>
                <Icon id={"icon-insta"} className={s.iconNav} />
              </a>
            </li>
          </ul>

          <ul className={s.userActions}>
            <li>
              <Icon id={"icon-user"} className={s.iconNav} />
            </li>
            <li className={s.wrapIcon}>
              <Icon
                id={"icon-heart"}
                className={`${s.iconNav} ${s.iconHeart}`}
              />
              {totalFavorite > 0 && (
                <p className={s.totalFavorite}>{totalFavorite}</p>
              )}
            </li>
            <li>
              <Icon id={"icon-basket"} className={s.iconNav} />
            </li>
          </ul>
          <button className={s.buttonBurger} onClick={toggleMenu}>
            {isOpen ? (
              <Icon className={s.burgerIcon} id={"icon-cross"} />
            ) : (
              <Icon className={s.burgerIcon} id={"icon-burgerMenu"} />
            )}
          </button>
        </div>
      </div>
      <BurgerMenu onClose={toggleMenu} isOpen={isOpen} />
    </header>
  );
};

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

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

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
  };

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const isMobile = useMediaQuery({ maxWidth: 1439 });

  useEffect(() => {
    if (!isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

  return (
    <header className={s.header}>
      <div className={s.container}>
        <p className={s.logo}>
          BON <span className={s.mobiLogoNone}>VINTAGE</span>{" "}
        </p>
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
            <form onSubmit={handleSubmit}>
              <input
                className={s.search}
                type="text"
                placeholder="Пошук"
                value={searchQuery}
                onChange={handleSearch}
              />
              <button className={s.wrapIconSearch}>
                <CiSearch className={s.searchIcon} />
              </button>
            </form>
          </div>
        </nav>
        <div className={s.wrapSocialUser}>
          <ul className={s.socialLinks}>
            <li>
              <a>
                <Icon id={"icon-e_etsy"} style={s.iconNav} />
              </a>
            </li>
            <li>
              <a>
                <Icon id={"icon-insta"} style={s.iconNav} />
              </a>
            </li>
          </ul>

          <ul className={s.userActions}>
            <li>
              <Icon id={"icon-user"} style={s.iconNav} />
            </li>
            <li className={s.wrapIcon}>
              <Icon id={"icon-heart"} style={`${s.iconNav}`} />
              {totalFavorite > 0 && <p className={s.totalFavorite}>{totalFavorite}</p>}
            </li>
            <li>
              <Icon id={"icon-basket"} style={s.iconNav} />
            </li>
          </ul>
          <button className={s.buttonBurger} onClick={toggleMenu}>
          {isOpen ? (
            <Icon style={s.burgerIcon} id={'icon-cross'}/>
          ) : (
            <Icon style={s.burgerIcon} id={'icon-burgerMenu'}/>
          )}
        </button>
        </div>

      </div>
      <BurgerMenu onClose={toggleMenu} isOpen={isOpen} />
    </header>
  );
};

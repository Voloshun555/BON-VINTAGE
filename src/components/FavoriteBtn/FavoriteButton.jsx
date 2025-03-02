
import s from "./FavoriteButton.module.scss";
import { Icon } from "../Icon/Icon";

// eslint-disable-next-line react/prop-types
export const FavoriteButton = ({ isFavorite, onClick, buttonHeart, iconHeart }) => {
  return (
    <button
      className={`${buttonHeart} `}
      onClick={onClick}
      aria-label={isFavorite ? "Видалити з улюбленого" : "Додати до улюбленого"}
    >
      <Icon
      id={'icon-heart'}
        className={`${iconHeart} ${s.iconHeart} ${
          isFavorite ? s.buttonHeartActive : ""
        }`}
      />
    </button>
  );
};

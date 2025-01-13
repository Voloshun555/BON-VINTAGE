import { CiHeart } from "react-icons/ci";
import s from "./FavoriteButton.module.scss";

// eslint-disable-next-line react/prop-types
export const FavoriteButton = ({ isFavorite, onClick, buttonHeart, iconHeart }) => {
  return (
    <button
      className={`${buttonHeart} `}
      onClick={onClick}
      aria-label={isFavorite ? "Видалити з улюбленого" : "Додати до улюбленого"}
    >
      <CiHeart
        className={`${iconHeart} ${s.iconHeart} ${
          isFavorite ? s.buttonHeartActive : ""
        }`}
      />
    </button>
  );
};

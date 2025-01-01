import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "@/redux/favoriteSlice/favoriteSlice";

export const useFavorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorite.favoriteList);
    
    const addFavoriteList = (id) => {
      dispatch(addFavorite(id));
    };

    const removeFavoriteList = (id) => {
      dispatch(removeFavorite(id));
    };

  const isFavorite = (id) => favorites.includes(id);

  return { addFavoriteList, removeFavoriteList, isFavorite };
};

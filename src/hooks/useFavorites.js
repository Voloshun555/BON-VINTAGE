import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "@/redux/favoriteSlice/favoriteSlice";
import { favoriteList } from "@/redux/selectors";

export const useFavorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(favoriteList);
    
    const addFavoriteList = (id) => {
      dispatch(addFavorite(id));
    };

    const removeFavoriteList = (id) => {
      dispatch(removeFavorite(id));
    };

  const isFavorite = (id) => favorites.includes(id);

  return { addFavoriteList, removeFavoriteList, isFavorite };
};

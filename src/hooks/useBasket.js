import { addToBasket, removeFromBasket } from "@/redux/basket/basket";
import { selectBasketList } from "@/redux/selectors";
import { useDispatch, useSelector } from "react-redux";

export const useBasket = () => {
  const dispatch = useDispatch();
  const listItemBasket = useSelector(selectBasketList);

  const addItemBasket = (id) => {
    dispatch(addToBasket(id));
  };

  const removeItemBasket = (id) => {
    dispatch(removeFromBasket(id));
  };

  const isItemBasket = (id) => listItemBasket.includes(id);

  return { addItemBasket, removeItemBasket, isItemBasket };
};

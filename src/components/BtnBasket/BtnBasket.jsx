/* eslint-disable react/prop-types */
import { useBasket } from "@/hooks/useBasket";

import s from "./BtnBasket.module.scss";

export const BtnBasket = ({ modalClassName, id }) => {
  const { addItemBasket, removeItemBasket, isItemBasket } = useBasket();

  const toggleBascket = () => {
    if (!isItemBasket(id)) {
      addItemBasket(id);
    } else {
      removeItemBasket(id);
    }
  };
  return (
    <button
      className={`${s.btnBascket} ${modalClassName}  ${
        isItemBasket(id) ? s.active : ""
      }`}
      aria-label="Додати до кошика"
      onClick={toggleBascket}
    >
      {isItemBasket(id) ? "Видалити з кошика" : "Додати до кошику"}
    </button>
  );
};

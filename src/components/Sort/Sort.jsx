import s from "./Sort.module.scss";
import shared from "@/scss/base/shared.module.scss"

export const Sort = () => {
  return (
    <div>
      <div className={shared.ContainerForTitle}>
        <p className={s.sort}>Сортувати</p>
      </div>
      <ul className={shared.grupCategories}>
        <li className={shared.listCategories}>За найновішими</li>
        <li className={shared.listCategories}>За найбільшою ціною</li>
        <li className={shared.listCategories}>За найменьшою ціною</li>
      </ul>
    </div>
  );
};

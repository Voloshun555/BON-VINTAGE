import { materials } from "@/fakeApi.js";
import shared from "@/scss/base/shared.module.scss";

export const Filter = () => {
  return (
    <div>
      <div className={shared.ContainerForTitle}>
        <h3>Фільтрувати</h3>
      </div>

      <ul className={shared.grupCategories}>
        {materials.map((item) => (
          <li key={item} className={shared.listCategories}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

import { categories } from "@/fakeApi.js";
import shared from "@/scss/base/shared.module.scss";

export const Сategories = () => {
  return (
    <div>
      <div className={shared.ContainerForTitle}>
        <h3>Катигорії</h3>
      </div>
      <ul className={shared.grupCategories}>
        {categories.map((item) => (
          <li key={item} className={shared.listCategories}>{item}</li>
        ))}
        
      </ul>
    </div>
  );
};

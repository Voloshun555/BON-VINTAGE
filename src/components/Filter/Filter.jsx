import shared from "@/scss/base/shared.module.scss";

export const Filter = () => {
  return (
    <div>
      <div className={shared.ContainerForTitle}>
        <h3>Фільтрувати</h3>
      </div>

      <ul className={shared.grupCategories}>
        <li className={shared.listCategories}>Порцеляна</li>
        <li className={shared.listCategories}>Кераміка</li>
        <li className={shared.listCategories}>Кришталь</li>
        <li className={shared.listCategories}>Скло</li>
        <li className={shared.listCategories}>Дерево</li>
        <li className={shared.listCategories}>Олово</li>
        <li className={shared.listCategories}>Латунь</li>
        <li className={shared.listCategories}>Посріблення</li>
        <li className={shared.listCategories}>Позолота</li>
        <li className={shared.listCategories}>Папір</li>
        <li className={shared.listCategories}>Тканина</li>
      </ul>
    </div>
  );
};

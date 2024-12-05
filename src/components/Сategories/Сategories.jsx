import shared from "@/scss/base/shared.module.scss";

export const Сategories = () => {
  return (
    <div>
      <div className={shared.ContainerForTitle}>
        <h3>Катигорії</h3>
      </div>
      <ul className={shared.grupCategories}>
        <li className={shared.listCategories}>Сервізи</li>
        <li className={shared.listCategories}>Тарілки</li>
        <li className={shared.listCategories}>Декоративні тарілки</li>
        <li className={shared.listCategories}>Чайні та кавові трійки</li>
        <li className={shared.listCategories}>Різний посуд</li>
        <li className={shared.listCategories}>Келихи для вина</li>
        <li className={shared.listCategories}>Келихи пивні</li>
        <li className={shared.listCategories}>Попільнички</li>
        <li className={shared.listCategories}>Предмети інтер’єру</li>
        <li className={shared.listCategories}>Картини та гравюри</li>
        <li className={shared.listCategories}>Вази</li>
        <li className={shared.listCategories}>Статуетки та фігурки</li>
        <li className={shared.listCategories}>Скриньки</li>
        <li className={shared.listCategories}>Скатертини та серветки</li>
        <li className={shared.listCategories}>Іграшки</li>
        <li className={shared.listCategories}>Меблі</li>
        <li className={shared.listCategories}>Карти колекційні</li>
      </ul>
    </div>
  );
};

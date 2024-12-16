import { CardList } from "@/components/Catalog/CardList/CardList";
import { Categorizer } from "@/components/Categorizer/Categorizer";
import s from "@/scss/base/shared.module.scss"

 const Catalog = () => {
   return (
     <div className={s.containerCategorizer}>
       <Categorizer />
       <CardList />
     </div>
   );
 };
export default Catalog;
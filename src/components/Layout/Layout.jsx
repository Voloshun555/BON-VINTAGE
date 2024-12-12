import { Heder } from "@/components/Heder/Heder.jsx";
import { Hero } from "@/components/Hero/Hero.jsx";
import { Categorizer } from "@/components/Categorizer/Categorizer";
import { CardList } from "@/components/Catalog/CardList/CardList.jsx";

import s from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={s.container}>
      <Heder />
      <main>
        <Hero />
        <section className={s.containerCategorizer}>
          <Categorizer />
          <CardList />
        </section>
      </main>
    </div>
  );
};

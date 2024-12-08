import { Heder } from "@/components/Heder/Heder.jsx";
import { Hero } from "@/components/Hero/Hero.jsx";
import { Сategories } from "@/components/Сategories/Сategories.jsx";
import { Filter } from "@/components/Filter/Filter.jsx";
import { Sort } from "@/components/Sort/Sort.jsx";
import { CardList } from "@/components/Catalog/CardList/CardList.jsx";

import s from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={s.container}>
      <Heder />
      <main>
        <Hero />
        <Sort />
        <Сategories />
        <Filter />
        <CardList/>
      </main>
    </div>
  );
};

import { Heder } from "@/components/Heder/Heder.jsx";
import { Hero } from "@/components/Hero/Hero.jsx";
import { Сategories } from "@/components/Сategories/Сategories.jsx";
import { Filter } from "@/components/Filter/Filter";

import s from "./Layout.module.scss";
import { Sort } from "../Sort/Sort";

export const Layout = () => {
  return (
    <div className={s.container}>
      <Heder />
      <main>
        <Hero />
        <Sort />
        <Сategories />
        <Filter />
      </main>
    </div>
  );
};

// import { Heder } from "@/components/Heder/Heder.jsx";
// import { Hero } from "@/components/Hero/Hero";
import { Categorizer } from "@/components/Categorizer/Categorizer";
import { CardList } from "@/components/Catalog/CardList/CardList";

import s from "./Layout.module.scss";
import { Header } from "@/components/Header/Header";

export const Layout = () => {
  return (
    <>
      {/* <Heder /> */}
      <Header />
      <main>
        {/* <Hero /> */}
        <section className={s.containerCategorizer}>
          <Categorizer />
          <CardList />
        </section>
      </main>
    </>
  );
};

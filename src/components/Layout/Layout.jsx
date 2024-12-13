
import { Categorizer } from "@/components/Categorizer/Categorizer";
import { CardList } from "@/components/Catalog/CardList/CardList";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

import s from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <section className={s.containerCategorizer}>
          <Categorizer />
          <CardList />
        </section>
      </main>
      <Footer/>
    </>
  );
};

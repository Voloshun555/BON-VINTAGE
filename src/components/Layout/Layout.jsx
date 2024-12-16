
// import { Categorizer } from "@/components/Categorizer/Categorizer";
// import { CardList } from "@/components/Catalog/CardList/CardList";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

// import s from "./Layout.module.scss";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

 const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Suspense fallback="Завантаження...">
          <Outlet />
        </Suspense>
        {/* <section className={s.containerCategorizer}>
          <Categorizer />
          <CardList />
        </section> */}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
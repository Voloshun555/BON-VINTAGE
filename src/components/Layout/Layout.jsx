import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

import s from "./Layout.module.scss";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={s.container}>
      <Header />
      <main>
        <Suspense fallback="Завантаження...">
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
export default Layout;

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Spiner } from "@/components/Spiner/Spiner";

import s from "./Layout.module.scss";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../scrollToTop/ScrollToTop";

const Layout = () => {
  return (
    <div className={s.container}>
      <Header />
      <main className={s.main}>
        <Suspense
          fallback={
            <div className={s.center}>
              <Spiner />
            </div>
          }
        >
          <Outlet />
        </Suspense>
         <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;

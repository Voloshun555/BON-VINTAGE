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
      </main>
      <Footer />
    </div>
  );
};
export default Layout;

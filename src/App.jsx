import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";

import Layout from "./components/Layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));

// const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
         <Route path="/catalog" element={<Catalog />} />
          {/* <Route path="/contact" element={<Contact />} />  */}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

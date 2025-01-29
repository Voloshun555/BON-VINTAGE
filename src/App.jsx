import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";

import Layout from "./components/Layout/Layout";
import { useProducts } from "./hooks/useProducts";

const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Favorite = lazy(() => import("./pages/Favorite"));

function App() {
  const { data, isLoading, isError } = useProducts(250);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="catalog"
          element={
            <Catalog data={data} isLoading={isLoading} isError={isError} />
          }
        />
        <Route
          path="favorite"
          element={
            <Favorite data={data} isLoading={isLoading} isError={isError} />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

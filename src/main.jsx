import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/scss/main.scss";

import App from "@/App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
      basename="/BON-VINTAGE"
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <App />
    </BrowserRouter>
  </StrictMode>
);

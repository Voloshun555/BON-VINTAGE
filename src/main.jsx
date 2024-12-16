import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@/scss/main.scss";
import App from "@/App";

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

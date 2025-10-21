import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Portafolio } from "./portafolio.jsx";
import { BrowserRouter } from "react-router";
import "./utils/i18n.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Portafolio />
    </BrowserRouter>
  </StrictMode>
);

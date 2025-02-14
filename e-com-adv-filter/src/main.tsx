import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FilterProvide } from "./components/FilterContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FilterProvide>
      <App />
    </FilterProvide>
  </StrictMode>
);

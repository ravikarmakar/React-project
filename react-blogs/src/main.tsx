import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import BlogProvider from "./shared/BlogContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BlogProvider>
      <App />
    </BlogProvider>
  </StrictMode>
);

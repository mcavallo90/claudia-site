import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./fonts.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <BrowserRouter basename="/claudia-site"> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
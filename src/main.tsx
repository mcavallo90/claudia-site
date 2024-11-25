import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./fonts.css";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";

import { Worker } from "@react-pdf-viewer/core";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <App />
      </Worker>
    </HashRouter>
  </StrictMode>
);

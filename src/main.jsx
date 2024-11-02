import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css/animate.min.css";
import AOS_Animation from "./Components/AOS_Animation.jsx";
import "./i18n";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AOS_Animation />
    <App />
  </StrictMode>
);

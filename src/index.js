import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import "./language/i18n";
import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.js";
import App from "./App";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

AOS.init();

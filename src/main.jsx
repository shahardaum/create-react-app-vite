import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import resetCSS from "./styles/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <resetCSS />
  </>
);

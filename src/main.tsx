import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// ! rem start
import "amfe-flexible/index.js";
// ! rem end


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);

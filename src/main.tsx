import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";

import routes from "@/routers";
import App from "@/App.tsx";
import "./index.css";

// ! rem start
// import "amfe-flexible/index.js";
// ! rem end

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <App />
  </Router>
);

import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import "./Style/Nav.css";
import "./Style/Home.css";
import "./Style/About.css";
import "./Style/Skills.css";
import "./Style/Project.css";
import "./Style/Contact.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./css/reset.css";
import "./css/utils.css";

import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/usersContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);

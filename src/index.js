import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import "../public/index.css";
import { Provider } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import store, {
  fetchUsers,
  logout,
  loginWithToken,
  socketActions,
} from "./store";
/* Import and destructure App.js from src/component/App.js
and anything else you may need here */

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

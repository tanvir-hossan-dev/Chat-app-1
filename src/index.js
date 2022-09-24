import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import firebaseConfig from "./FirebaseConfig";
import Store from "./redux/app/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

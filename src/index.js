import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "tailwindcss/tailwind.css";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import Store from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(Store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

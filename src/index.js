import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodoProvider } from "./contexts/TodoContext";
import { CheckedContextProvider } from "./contexts/CheckedContext";
import "./sass/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoProvider>
      <CheckedContextProvider>
        <App />
      </CheckedContextProvider>
    </TodoProvider>
  </React.StrictMode>
);

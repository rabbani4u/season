import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SeasonDisplay from "./SeasonDisplay";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <SeasonDisplay />
  </React.StrictMode>
);

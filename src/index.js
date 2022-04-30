import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/simple-ecommerce">
    {/* I used the basename prop to fix the issue with github pages */}
    {/* solution found here: https://github.com/gitname/react-gh-pages/issues/3 */}
    <App />
  </BrowserRouter>
);

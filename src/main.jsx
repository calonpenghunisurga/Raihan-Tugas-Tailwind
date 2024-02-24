import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./components/Home/Home";
import App from "../src/App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Website from "./components/Website";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Website />,
  },
  {
    path: "/app",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

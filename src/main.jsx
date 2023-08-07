import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FilterProvider } from "./context/filter";
import { Characters } from "./pages/characters";
import { Character } from "./pages/character";
import { Location } from "./pages/location";

import "./index.css";
import { Episodes } from "./pages/episode";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Characters />,
  },
  {
    path: "/character/:id",
    element: <Character />,
  },
  {
    path: "/locations",
    element: <Location />,
  },
  {
    path: "/episodes",
    element: <Episodes />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilterProvider>
      <RouterProvider router={routes} />
    </FilterProvider>
  </React.StrictMode>
);

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/partial/Main/Main";
import About from "../about/About";
import Contact from "../contact/Contact";
import Home from "../../components/pages/index/Home";
import Tour from "../tours/Tour";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/tour",
        element: <Tour></Tour>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/partial/Main/Main";
import About from "../about/About";
import Contact from "../contact/Contact";
import Home from "../../components/pages/index/Home";
import Tour from "../tours/Tour";
import TourDetails from "../tours/TourDetails/TourDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: async () => {
          const dataResponse = await fetch('Data.json');
          const galleryResponse = await fetch('Gallery.json');
          const data = await dataResponse.json();
          const gallery = await galleryResponse.json();
          return { data, gallery };
        },
        element: <Home></Home>,
      },

      {
        path: "/tour",
        loader: async () => {
          const dataResponse = await fetch('Data.json');
          const data = await dataResponse.json();
          return { data };
        },
        element: <Tour></Tour>
      },
      {
        path: "/tour/:slug",
        element: <TourDetails></TourDetails>
      },

      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    ],
  },
]);


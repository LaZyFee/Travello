import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Header/Nav";
import Footer from "../Footer/Footer";
const Main = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

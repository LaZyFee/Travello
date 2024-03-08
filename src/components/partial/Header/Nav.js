import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assests/image/logo/logo.png";
const Nav = () => {
  return (
    <div className="navbar z-20 bg-base-100 sticky top-0 shadow-md">
      <div className="navbar-start flex justify-between w-full flex-row-reverse">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden me-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-auto"
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/tour'>Tours</Link>
            </li>
            <li>
              <Link to='/about'>About us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <Link>
          <img src={logo} alt="nav-img" className="w-[48px] h-[48px]" />
        </Link>
      </div>

      <div className="navbar-end gap-8 md:me-20 hidden md:flex whitespace-nowrap">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-2 border-green-500 p-2 font-bold rounded-full"
              : "text-green-700 hover:bg-blue-200 hover:p-2 hover:rounded-xl"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-2 border-green-500 p-2 font-bold rounded-full"
              : "text-green-700 hover:bg-blue-200 hover:p-2 hover:rounded-xl"
          }
          to="/tour"
        >
          Tours
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-2 border-green-500 p-2 font-bold rounded-full"
              : "text-green-700 hover:bg-blue-200 hover:p-2 hover:rounded-xl"
          }
          to="/about"
        >
          About us
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-2 border-green-500 p-2 font-bold rounded-full"
              : "text-green-700 hover:bg-blue-200 hover:p-2 hover:rounded-xl"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;

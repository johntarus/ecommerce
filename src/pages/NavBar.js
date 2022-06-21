import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "../index.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo sm:text-2xl w-8 mr-6 sm:mt-4">
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
            FASH<span className="text-purple-600">SHOP</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item ml-12">
              <NavLink
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Products
              </NavLink>
            </li>
          </ul>
          <div className="flex">
            <div className="relative">
              <svg
                className="w-8 h-8 sm:w-10  mt-2 cursor-pointer lg:mt-6 lg:mr-32 md:mt-6 md:mr-32 sm:h-10 sm:mt-4 sm:mr-16 sm:ml-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => navigate("/cart")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                ></path>
              </svg>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-[#ed4833] hover:from-[#ed4833] hover:to-purple-600  text-white py-1 px-4 mr-12 ml-12 mt-2 border  hover:border-transparent rounded lg:hidden md:hidden sm:hidden">
              Login
            </button>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

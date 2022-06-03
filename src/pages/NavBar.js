import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo sm:text-2xl sm:mt-4">
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
            FASH<span className="text-purple-600">SHOP</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
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
            <svg
              className="w-8 h-8 sm:w-10 mr-12 mt-2 cursor-pointer sm:h-10 sm:mt-4 sm:mr-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mr-12 border border-blue-500 hover:border-transparent rounded">
              Button
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

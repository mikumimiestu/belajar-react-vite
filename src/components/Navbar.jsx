import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar fixed w-full transition-all py-4 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="text-2xl font-bold">Logo.</h1>
          </div>
          {/* Menu Items */}
          <ul
            className={`md:flex gap-12 items-center md:static absolute w-full left-0 md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in ${
              isOpen ? "top-16" : "-top-96"
            }`}
          >
            <li className="py-2 md:py-0">
              <a href="#" className="font-medium opacity-75 hover:opacity-100 transition-all">
                Home
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#" className="font-medium opacity-75 hover:opacity-100 transition-all">
                About
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#" className="font-medium opacity-75 hover:opacity-100 transition-all">
                Service
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#" className="font-medium opacity-75 hover:opacity-100 transition-all">
                Project
              </a>
            </li>
          </ul>
          {/* Social Media & Hamburger */}
          <div className="flex items-center gap-4">
            <div className="social">
              <a
                href="#"
                className="bg-green-400 px-5 py-2 rounded-lg text-white font-bold hover:bg-green-600 transition-all"
              >
                Social Media
              </a>
            </div>
            {/* Hamburger Icon */}
            <button
              onClick={toggleMenu}
              className="text-3xl md:hidden focus:outline-none"
            >
              <i className={`ri-${isOpen ? 'close-line' : 'menu-line'}`}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-950 p-4 md:flex relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Smaller, Circular Logo */}
        <span className="w-12 sm:w-14 md:w-16 lg:w-18">
          <img
            src="logo.jpg"
            alt="Logo"
            className="w-full h-auto object-cover rounded-full"
          />
        </span>
        {/* Hamburger Icon */}
        <span
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden ml-auto cursor-pointer transition-transform duration-300 ease-in-out"
        >
          <svg
            className={`w-8 h-8 transform transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M3 6h18M3 12h18m-9 6h9"
              />
            )}
          </svg>
        </span>
      </div>
      {/* Links */}
      <div
        className={`flex-col md:flex-row md:flex md:items-center md:space-x-4 justify-end transition-all duration-500 ease-in-out transform ${
          isOpen ? "flex opacity-100 translate-y-0" : "hidden opacity-0 translate-y-[-20px]"
        } md:translate-y-0 md:opacity-100 md:block`}
      >
        <NavLink
          to="/"
          className="text-gray-100 p-2 transition-colors duration-300 ease-in-out hover:text-yellow-400"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="text-gray-100 p-2 transition-colors duration-300 ease-in-out hover:text-yellow-400"
        >
          About
        </NavLink>
        <NavLink
          to="/product"
          className="text-gray-100 p-2 transition-colors duration-300 ease-in-out hover:text-yellow-400"
        >
          Product
        </NavLink>
        <NavLink
          to="/contact"
          className="text-gray-100 p-2 transition-colors duration-300 ease-in-out hover:text-yellow-400"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className=" shadow-md fixed top-0 right-0 w-[85%] h-20 bg-green-100  flex items-center">
      <div className="container mx-auto flex justify-evenly items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <h1>
            <span className="text-indigo-600">Apparel</span>Avenue
          </h1>
        </div>

        {/* Search Bar */}
        <div className="bg-slate-50 flex justify-around items-center px-4 py-1 rounded-full">
          <input type="text" placeholder="Search for products..." />
          <FaSearch />
        </div>
      </div>

      {/* Mobile Menu (hamburger) */}
      <div className="md:hidden flex items-center justify-between px-6 py-3">
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">ApparelStore</a>
        </div>
        <button
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Open Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

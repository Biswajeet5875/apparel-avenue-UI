import React from "react";
import { CiHome } from "react-icons/ci";
import {
  FaAddressBook,
  FaCartArrowDown,
  FaHome,
  FaPhoneAlt,
  FaProductHunt,
} from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 bottom-0 w-72 h-screen bg-[#b5dbfa] hidden md:flex md:flex-col">
      <div className="w-4/5 mx-auto ">
        <div className="logo items-center my-8 pb-12 md:flex">
          <img
            src="/pic/logo.jpg"
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
          {/* <h1 className="ml-4 text-xl uppercase">ApparelAvenue</h1> */}
        </div>

        <ul className="space-y-8">
          <li className="flex gap-4 items-center">
            <FaHome />
            <a href="#" className="flex items-center text-gray-700">
              <span className="nav-item">Home</span>
            </a>
          </li>
          <li className="flex gap-4 items-center">
            <MdDashboard />
            <a href="#" className="flex items-center text-gray-700">
              <span className="nav-item">Dashboard</span>
            </a>
          </li>
          <li className="flex gap-4 items-center">
            <FaProductHunt />
            <a href="#" className="flex items-center text-gray-700">
              <span className="nav-item">Products</span>
            </a>
          </li>
          <li className="flex gap-4 items-center">
            <FaCartArrowDown />
            <a href="#" className="flex items-center text-gray-700">
              <span className="nav-item">Order</span>
            </a>
          </li>
          <li className="flex gap-4 items-center">
            <FaAddressBook />
            <a href="#" className="flex items-center text-gray-700">
              <span className="nav-item">About</span>
            </a>
          </li>
          <li className="flex gap-4 items-center">
            <FaPhoneAlt />
            <a href="#" className="flex items-center text-gray-700">
              <span className="nav-item">Contact</span>
            </a>
          </li>
          <li className="flex gap-4 items-center">
            <IoIosHelpCircle />
            <a href="#" className="flex items-center text-gray-700">
              <span className="nav-item">Help</span>
            </a>
          </li>
          <li className="absolute bottom-8 flex gap-4 items-center font-bold shadow-custom-black px-2 py-1 rounded-sm">
            <LuLogOut />
            <a href="#" className="flex items-center text-gray-700">
              <span className="nav-item text-indigo-800">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

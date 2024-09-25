import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Banner_Details = ({ bannerSrc, title, description }) => {
  return (
    <div className="flex items-center border border-gray-300 p-4 rounded-lg w-[80%] h-60">
      <img
        src={bannerSrc}
        alt="Banner"
        className="w-72 h-full object-cover mr-4"
      />
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-1">{description}</p>
        <div className="p-4 flex gap-2">
          <button className="flex justify-center items-center gap-1 w-[6.5rem] bg-yellow-500 text-lg border-2 border-yellow-500 text-white rounded-2xl ">
            <FaEdit /> Edit
          </button>
          <button className="flex justify-center items-center gap-1 w-[6.5rem] bg-red-500 text-lg border-2 border-red-500 text-white rounded-2xl">
            <MdDelete /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner_Details;

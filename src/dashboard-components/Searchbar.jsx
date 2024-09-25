import React from 'react';

const SearchBar = () => {
    return (
        <div className="flex justify-evenly items-center mb-6">
            <input
                type="search"
                placeholder="Search dress here..."
                className="w-1/2 p-2 px-5 outline-none border-0  rounded-3xl shadow-custom-black focus:outline-none focus:border-blue-500"
            />
            <select className="w-40 text-center ml-4 p-2 px-5 outline-none border border-gray-300 border-0  rounded-3xl shadow-custom-black">
                <option>Category</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <select className="w-40 text-center ml-4 p-2 px-5 outline-none border border-gray-300 border-0  rounded-3xl shadow-custom-black">
                <option>Filter</option>
            </select>
        </div>
    );
};

export default SearchBar;

import React from "react";
import JobCard from "./JobCard";
import SearchBar from "./Searchbar";
import { Header } from "./Header";

const Main = () => {
  return (
    <>
      <section className="w-full bg-[#8cafcb]">
        <Header />
        <div className="p-4">
          <SearchBar />
          <div className="flex justify-between my-6">
            <p className="text-lg text-gray-700">
              Welcome to <span className="text-blue-500">Assets</span>
            </p>
            <a href="#" className="text-blue-500">
              See all
            </a>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <JobCard title="Total Product" count="25000" />
            <JobCard title="Order" count="5500" />
            <JobCard title="Cart" count="25" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;

import React from "react";

const ProductData = () => {
  return (
    <div className="grid grid-cols-5 justify-center items-center w-[90%] h-24 mx-auto space-x-4 p-4 rounded-md border-b-2">
      <div className="mx-auto">
        <img
          src="https://via.placeholder.com/50"
          alt="Product"
          className="w-16 h-16 object-cover rounded-md"
        />
      </div>

      <div className="mx-auto">
        <h2 className="text-lg font-semibold">Product Title</h2>
      </div>

      <div className="mx-auto">
        <p className="text-md font-medium text-green-600">$50.00</p>
      </div>

      <div className="mx-auto">
        <p className="text-md font-medium text-gray-600">Total Qty: 100</p>
      </div>

      <div className="mx-auto">
        <svg width="60" height="40" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 10 30 L 20 20 L 30 25 L 40 10 L 50 15"
            stroke="blue"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProductData;

import React from "react";

const ProductPopupLayout = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white bg-transparent hover:text-gray-300 text-3xl font-bold"
      >
        &times;
      </button>
      <div className="bg-white w-3/4 max-w-4xl rounded-lg shadow-lg overflow-hidden">
        <div className="flex">
          <div className="w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover h-full w-full"
            />
          </div>

          <div className="w-1/2 p-6 flex flex-col justify-between">
            <div className="text-center">
              <h2 className="text-2xl font-bold">{product.title}</h2>
              <div className="grid grid-cols-2 text-left mt-4 gap-4">
                <div>
                  <p>
                    <strong>Seller:</strong>
                  </p>
                  <p>
                    <strong>Cost Price:</strong>
                  </p>
                  <p>
                    <strong>Selling Price:</strong>
                  </p>
                  <p>
                    <strong>Seller's Address:</strong>
                  </p>
                  <p>
                    <strong>Shipping Charges:</strong>
                  </p>
                  <p>
                    <strong>Total Amount:</strong>
                  </p>
                  <p>
                    <strong>Total Quantity:</strong>
                  </p>
                  <p>
                    <strong>Popularity:</strong>
                  </p>
                </div>

                <div>
                  <p>{product.seller}</p>
                  <p>${product.costPrice}</p>
                  <p>${product.sellingPrice}</p>
                  <p>{product.sellerAddress}</p>
                  <p>${product.shippingCharges}</p>
                  <p>${product.totalAmount}</p>
                  <p>{product.totalQuantity}</p>
                  <p>{product.popularity}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4"
                onClick={() => alert("Edit clicked")}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg"
                onClick={() => alert("Delete clicked")}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopupLayout;

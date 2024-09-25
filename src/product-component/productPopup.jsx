import React, { useState } from "react";
import ProductPopupLayout from "./productPopupLayout";

const ProductPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const product = {
    image: "https://via.placeholder.com/400",
    title: "Product Name",
    seller: "Seller Name",
    costPrice: 50,
    sellingPrice: 70,
    sellerAddress: "123 Seller Street, City",
    shippingCharges: 5,
    totalAmount: 75,
    totalQuantity: 10,
    popularity: "High",
  };

  return (
    <div>
      <button
        onClick={() => setIsPopupOpen(true)}
        className="bg-blue-600 text-white py-2 px-4 rounded-lg"
      >
        Open Popup
      </button>
      {/* the && checks if isPopUp is true. if it is then ProductPopupLayout is send */}
      {isPopupOpen && (
        <ProductPopupLayout
          product={product}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductPopup;

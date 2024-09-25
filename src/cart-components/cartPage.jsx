import React from "react";
import CartSection from "./cartSection";

const CartPage = () => {
  const cartData = [
    {
      customerId: "CUST123456",
      totalProductQty: 10,
      orderDate: "September 24, 2024",
      products: [
        { productId: "PROD001", productName: "Product 1", productQty: 5 },
        { productId: "PROD002", productName: "Product 2", productQty: 3 },
        { productId: "PROD003", productName: "Product 3", productQty: 2 },
      ],
    },
    {
      customerId: "CUST654321",
      totalProductQty: 8,
      orderDate: "September 23, 2024",
      products: [
        { productId: "PROD004", productName: "Product 4", productQty: 4 },
        { productId: "PROD005", productName: "Product 5", productQty: 4 },
      ],
    },
    {
      customerId: "CUST987654",
      totalProductQty: 15,
      orderDate: "September 22, 2024",
      products: [
        { productId: "PROD006", productName: "Product 6", productQty: 10 },
        { productId: "PROD007", productName: "Product 7", productQty: 5 },
      ],
    },
    {
      customerId: "CUST567890",
      totalProductQty: 12,
      orderDate: "September 21, 2024",
      products: [
        { productId: "PROD008", productName: "Product 8", productQty: 6 },
        { productId: "PROD009", productName: "Product 9", productQty: 6 },
      ],
    },
    {
      customerId: "CUST246810",
      totalProductQty: 7,
      orderDate: "September 20, 2024",
      products: [
        { productId: "PROD010", productName: "Product 10", productQty: 7 },
      ],
    },
    {
      customerId: "CUST135791",
      totalProductQty: 5,
      orderDate: "September 19, 2024",
      products: [
        { productId: "PROD011", productName: "Product 11", productQty: 5 },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Cart Details</h1>

      {/* Render each cart section */}
      {cartData.map((cart, index) => (
        <CartSection
          key={index}
          customerId={cart.customerId}
          totalProductQty={cart.totalProductQty}
          orderDate={cart.orderDate}
          products={cart.products}
        />
      ))}
    </div>
  );
};

export default CartPage;

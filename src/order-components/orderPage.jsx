import React from "react";
import CustomerDetails from "./customerDetails";
import ProductDetails from "./productDetails";
import OrderSummary from "./orderSummary";
import ShippingDetails from "./shippingDetails";
import PaymentDetails from "./paymentDetails";

const OrderPage = () => {
  const customerData = {
    id: "CUST123456",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    picture: "https://via.placeholder.com/100", // Customer picture
  };

  const orderData = {
    orderDate: "September 24, 2024",
    totalAmount: 299.99,
    shippingStatus: "Shipped",
    products: [
      {
        id: "PROD001",
        name: "Product 1",
        image: "https://via.placeholder.com/100", // Product image
        price: 99.99,
        quantity: 2,
      },
      {
        id: "PROD002",
        name: "Product 2",
        image: "https://via.placeholder.com/100", // Product image
        price: 49.99,
        quantity: 1,
      },
    ],
    shipping: {
      address: "123 Main St",
      city: "Springfield",
      state: "IL",
      zip: "62704",
      country: "USA",
    },
    payment: {
      method: "Credit Card",
      status: "Paid",
    },
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Order Details</h1>

      {/* Customer Details */}
      <CustomerDetails customer={customerData} />

      {/* Order Details */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Order Details</h2>

        {/* Products */}
        {orderData.products.map((product) => (
          <ProductDetails key={product.id} product={product} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 ">
        <OrderSummary
          orderDate={orderData.orderDate}
          totalAmount={orderData.totalAmount}
          shippingStatus={orderData.shippingStatus}
        />

        <ShippingDetails shipping={orderData.shipping} />

        <PaymentDetails payment={orderData.payment} />
      </div>
    </div>
  );
};

export default OrderPage;

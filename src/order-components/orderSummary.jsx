const OrderSummary = ({ orderDate, totalAmount, shippingStatus }) => {
  return (
    <div className="p-4 border rounded-md shadow-md mt-6 transition duration-300 hover:translate-y-[-1rem] hover:shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      <p>
        <strong>Order Date:</strong> {orderDate}
      </p>
      <p>
        <strong>Total Amount:</strong> ${totalAmount.toFixed(2)}
      </p>
      <p>
        <strong>Shipping Status:</strong> {shippingStatus}
      </p>
    </div>
  );
};

export default OrderSummary;

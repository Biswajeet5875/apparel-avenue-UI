const PaymentDetails = ({ payment }) => {
  return (
    <div className="mt-6 p-4 border rounded-md shadow-md transition duration-300 hover:translate-y-[-1rem] hover:shadow-lg">
      <h3 className="text-lg font-semibold mb-2">Payment Information</h3>
      <p>
        <strong>Method:</strong> {payment.method}
      </p>
      <p>
        <strong>Status:</strong> {payment.status}
      </p>
    </div>
  );
};

export default PaymentDetails;

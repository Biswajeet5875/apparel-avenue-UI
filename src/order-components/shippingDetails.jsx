const ShippingDetails = ({ shipping }) => {
  return (
    <div className="mt-6 p-4 border rounded-md shadow-md transition duration-300 hover:translate-y-[-1rem] hover:shadow-lg">
      <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
      <p>{shipping.address}</p>
      <p>
        {shipping.city}, {shipping.state} {shipping.zip}
      </p>
      <p>{shipping.country}</p>
    </div>
  );
};

export default ShippingDetails;

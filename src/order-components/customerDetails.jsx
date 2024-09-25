const CustomerDetails = ({ customer }) => {
  return (
    <div className="flex items-center space-x-4 mb-6">
      {/* Customer Picture */}
      <img
        src={customer.picture}
        alt={customer.name}
        className="w-20 h-20 rounded-full object-cover"
      />
      <div>
        <h2 className="text-lg font-semibold">Customer ID: {customer.id}</h2>
        <p className="text-lg font-semibold">Name: {customer.name}</p>
        <p className="text-gray-500">Email: {customer.email}</p>
        <p className="text-gray-500">Phone: {customer.phone}</p>
      </div>
    </div>
  );
};

export default CustomerDetails;

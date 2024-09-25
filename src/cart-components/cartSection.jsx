const CartSection = ({ customerId, totalProductQty, orderDate, products }) => {
  return (
    <section className="border p-6 mb-6 transition duration-300 hover:translate-y-[-1rem] hover:shadow-lg">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Customer ID: {customerId}</h2>
          </div>
          <div>
            <p className="text-lg">Total Products: {totalProductQty}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Products:</h3>
          {products.map((product) => (
            <div
              key={product.productId}
              className="flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">
                  Product Name: {product.productName}
                </p>
                <p className="text-gray-500">Product ID: {product.productId}</p>
              </div>
              <div>
                <p className="text-lg">Quantity: {product.productQty}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Date */}
        <div className="flex justify-between items-center">
          <p className="font-semibold">Order Date:</p>
          <p className="text-gray-500">{orderDate}</p>
        </div>
      </div>
    </section>
  );
};

export default CartSection;

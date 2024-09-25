const ProductDetails = ({ product }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-cover"
      />
      {/* Product Info */}
      <div className="flex-1 ml-4">
        <h3 className="font-semibold">Product Name: {product.name}</h3>
        <p className="text-gray-500">Product ID: {product.id}</p>
      </div>
      {/* Quantity and Total */}
      <div className="text-right">
        <p className="text-lg">Quantity: {product.quantity}</p>
        <p className="font-semibold">Price: ${product.price}</p>
        <p className="font-semibold">
          Total: ${(product.price * product.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;

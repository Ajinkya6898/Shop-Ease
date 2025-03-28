import { FaShoppingCart, FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden p-4 transition transform hover:scale-105">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-48 h-48 object-cover rounded-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {product.name}
        </h3>
        <div className="flex items-center mt-2 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < product.rating ? "" : "text-gray-300"}
            />
          ))}
        </div>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-blue-600">
            ${product.price}
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition">
            <FaShoppingCart /> <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

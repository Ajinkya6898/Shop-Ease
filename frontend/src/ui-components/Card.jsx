import { FaShoppingCart, FaStar, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart, addToWishList } from "../slices/productSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  function handleAddToWishlist(product) {
    dispatch(addToWishList(product));
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 transition transform hover:scale-105 relative">
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-48 h-48 object-cover rounded-lg"
        />
      </div>
      <button
        onClick={() => handleAddToWishlist(product)}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
      >
        <FaHeart className="cursor-pointer" size={20} />
      </button>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {product.title}
        </h3>
        <p className="text-lg font-extralight capitalize text-gray-900 truncate">
          {product.category}
        </p>
        <div className="flex items-center mt-2 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < product.rating.rate ? "" : "text-gray-300"}
            />
          ))}
        </div>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-brand-600">
            ₹ {product.price}
          </span>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-brand-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-brand-700 transition"
          >
            <FaShoppingCart /> <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

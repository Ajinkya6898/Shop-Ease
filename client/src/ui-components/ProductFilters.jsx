import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function ProductFilters({ categories, brands, onFilterChange }) {
  const [openFilters, setOpenFilters] = useState({
    category: true,
    price: true,
    brand: false,
    sort: false,
  });

  const toggleFilter = (filter) => {
    setOpenFilters({ ...openFilters, [filter]: !openFilters[filter] });
  };

  return (
    <aside className="w-full md:w-64 bg-white shadow-lg rounded-lg p-5">
      <h2 className="text-lg font-semibold mb-4 text-gray-900">Filters</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full text-gray-800 font-medium"
          onClick={() => toggleFilter("category")}
        >
          Category {openFilters.category ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {openFilters.category && (
          <div className="mt-2 space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input type="checkbox" className="text-blue-500" />
                <span className="text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full text-gray-800 font-medium"
          onClick={() => toggleFilter("price")}
        >
          Price Range {openFilters.price ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {openFilters.price && (
          <div className="mt-3">
            <input type="range" min="100" max="10000" className="w-full" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>₹100</span>
              <span>₹10,000</span>
            </div>
          </div>
        )}
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full text-gray-800 font-medium"
          onClick={() => toggleFilter("brand")}
        >
          Brand {openFilters.brand ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {openFilters.brand && (
          <div className="mt-2 space-y-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center space-x-2">
                <input type="checkbox" className="text-blue-500" />
                <span className="text-gray-700">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Sort By Filter */}
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full text-gray-800 font-medium"
          onClick={() => toggleFilter("sort")}
        >
          Sort By {openFilters.sort ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {openFilters.sort && (
          <div className="mt-2 space-y-2">
            {["Price: Low to High", "Price: High to Low", "Popularity"].map(
              (sortOption) => (
                <label key={sortOption} className="flex items-center space-x-2">
                  <input type="radio" name="sort" className="text-blue-500" />
                  <span className="text-gray-700">{sortOption}</span>
                </label>
              )
            )}
          </div>
        )}
      </div>

      {/* Apply & Reset Buttons */}
      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition">
          Apply
        </button>
        <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-400 transition">
          Reset
        </button>
      </div>
    </aside>
  );
}

import React from "react";
// import { FaShoppingCart, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ImageSlider from "../ui-components/ImageSlider";
import { useState } from "react";
import { FaShoppingCart, FaStar, FaTruck } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        {/* <ImageSlider /> */}
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16 text-center">
          <h1 className="text-4xl font-bold">Discover Amazing Deals</h1>
          <p className="mt-2 text-lg">
            Shop the best products at unbeatable prices!
          </p>
          <NavLink
            to="/shop"
            className="mt-4 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Shop Now
          </NavLink>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((product) => (
              <div key={product} className="bg-white p-4 rounded-lg shadow-lg">
                <div className="h-40 bg-gray-300 rounded-lg"></div>
                <h3 className="text-lg font-semibold mt-4">Product Name</h3>
                <div className="flex items-center text-yellow-500 mt-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <p className="text-gray-600 mt-2">$99.99</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition">
                  <FaShoppingCart /> <span>Add to Cart</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Electronics", "Fashion", "Home", "Sports"].map((category) => (
              <div
                key={category}
                className="bg-gray-200 p-6 text-center rounded-lg font-semibold text-gray-800 cursor-pointer hover:bg-gray-300 transition"
              >
                {category}
              </div>
            ))}
          </div>
        </section>

        {/* Deals Section */}
        <section className="bg-yellow-500 py-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Limited Time Offers!
          </h2>
          <p className="mt-2 text-lg">
            Grab the best deals before they expire.
          </p>
          <NavLink
            to="/deals"
            className="mt-4 inline-block bg-gray-900 text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            View Deals
          </NavLink>
        </section>
      </div>
    </div>
    // <>
    //   <div className="bg-gray-100">
    //     {/* Hero Section */}
    //     <section
    //       className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center p-6"
    //       style={{ backgroundImage: "url('/hero-banner.jpg')" }}
    //     >
    //       <div className="bg-black bg-opacity-50 p-10 rounded-lg">
    //         <h1 className="text-4xl font-bold mb-4">
    //           Discover the Best Deals on Top Products!
    //         </h1>
    //         <p className="text-lg">
    //           Shop the latest trends with unbeatable prices.
    //         </p>
    //         <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
    //           Shop Now
    //         </button>
    //       </div>
    //     </section>

    //     {/* Categories Section */}
    //     <section className="py-12 px-6 container mx-auto">
    //       <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
    //         Shop by Category
    //       </h2>
    //       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    //         {["Electronics", "Fashion", "Home & Kitchen", "Sports"].map(
    //           (category) => (
    //             <div
    //               key={category}
    //               className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer text-center"
    //             >
    //               <h3 className="text-xl font-semibold">{category}</h3>
    //             </div>
    //           )
    //         )}
    //       </div>
    //     </section>

    //     {/* Featured Products */}
    //     <section className="py-12 bg-white px-6">
    //       <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
    //         Featured Products
    //       </h2>
    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    //         {[1, 2, 3].map((id) => (
    //           <div
    //             key={id}
    //             className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition text-center"
    //           >
    //             <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>
    //             <h3 className="text-lg font-semibold">Product {id}</h3>
    //             <p className="text-gray-500">$99.99</p>
    //             <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center">
    //               <FaShoppingCart className="mr-2" /> Add to Cart
    //             </button>
    //           </div>
    //         ))}
    //       </div>
    //     </section>

    //     {/* Testimonials */}
    //     <section className="py-12 px-6 bg-gray-200">
    //       <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
    //         What Our Customers Say
    //       </h2>
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //         {[1, 2].map((id) => (
    //           <div key={id} className="bg-white p-6 rounded-lg shadow">
    //             <p className="text-gray-700">
    //               "Amazing product quality and fast shipping! Highly
    //               recommended!"
    //             </p>
    //             <div className="mt-4 flex items-center space-x-2">
    //               {[...Array(5)].map((_, i) => (
    //                 <FaStar key={i} className="text-yellow-500" />
    //               ))}
    //               <span className="text-gray-600">5.0</span>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </section>

    //     {/* Newsletter */}
    //     <section className="py-12 px-6 text-center bg-blue-600 text-white">
    //       <h2 className="text-3xl font-bold">Stay Updated!</h2>
    //       <p className="text-lg mb-4">
    //         Subscribe to our newsletter for exclusive deals.
    //       </p>
    //       <div className="flex justify-center">
    //         <input
    //           type="email"
    //           placeholder="Your Email"
    //           className="p-3 rounded-l-lg text-gray-700"
    //         />
    //         <button className="bg-black text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 transition">
    //           Subscribe
    //         </button>
    //       </div>
    //     </section>

    //     {/* Footer */}
    //     <footer className="py-6 px-6 bg-gray-900 text-white text-center">
    //       <p>&copy; 2025 ShopEase. All rights reserved.</p>
    //     </footer>
    //   </div>
    // </>
  );
};

export default Dashboard;

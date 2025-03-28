import React, { useState } from "react";
import { HiOutlineTruck } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
import { HiArrowSmallRight } from "react-icons/hi2";
import { AiOutlineFire } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);

    if (value === "profile") {
      navigate("/profile");
    } else if (value === "logout") {
      console.log("Logging out...");
      // Handle logout logic here
    }
  };
  const loggedIn = true;
  function handleLogout() {
    navigate("/login");
  }
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-brand-600">
          ShopEase
        </a>

        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-lg w-1/3">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-transparent focus:outline-none"
          />
          <button className="text-blue-600 font-semibold">
            <GoSearch />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          {/* <NavLink
            to="/deals"
            className="hidden md:block text-gray-700 hover:text-blue-600"
          >
            <AiOutlineFire /> Today's Deals
          </NavLink> */}
          <div className="relative">
            {loggedIn ? (
              <div className="flex items-center space-x-4">
                <FaRegUserCircle className="text-gray-700 text-2xl" />
                <span className="text-gray-950 font-medium">John Doe</span>
                <button
                  className="bg-red-600 text-white ml-4 px-3 py-1 rounded-lg hover:bg-red-700 transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </NavLink>
            )}
          </div>
        </div>
      </div>

      {/* <div className="bg-blue-600 text-white text-center py-2 text-sm flex items-center justify-center space-x-2">
        <HiOutlineTruck className="text-lg" />
        <span>Free Shipping on Orders Over $50!</span>
        <NavLink
          to="/deals"
          className="flex items-center space-x-1 underline hover:text-gray-200 transition"
        >
          <span>Shop Now</span>
          <HiArrowSmallRight className="text-lg" />
        </NavLink>
      </div> */}
    </header>
  );
};

export default Header;

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../slices/userSlice";
import { useModal } from "../ui-components/ModalProvider";
import Button from "./Button";

const Header = () => {
  const dispatch = useDispatch();
  const { modalDispatch } = useModal();
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("userInfo")) || {};
  const { name = "", isLoggedIn = false } = storedUser;

  function handleLogout() {
    modalDispatch({
      type: "warning",
      message: "Do you want to logout?",
      onConfirm: () => {
        dispatch(logout());
        navigate("/login");
      },
    });
  }

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md border-b-2 border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold text-brand-600">
          ShopEase
        </NavLink>

        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-lg w-1/3">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-transparent focus:outline-none"
          />
          <button className="text-brand-600 font-semibold">
            <GoSearch />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <FaRegUserCircle className="text-gray-700 text-2xl" />
                <span className="text-gray-950 font-medium">{name}</span>
                <Button appearance="error" size="medium" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition cursor-pointer"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

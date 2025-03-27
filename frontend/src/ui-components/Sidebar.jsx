import React from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlinePaperAirplane,
  HiOutlineRectangleGroup,
  HiOutlineShoppingCart,
} from "react-icons/hi2";

const StyledNavLink = ({ icon, navLabel, to }) => {
  return (
    <li className="bg-white h-10 flex items-center gap-4 hover:bg-sky-50 hover:rounded-md">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-4 w-full h-full px-4 rounded-md hover:bg-sky-50 ${
            isActive ? "bg-sky-50" : "bg-white"
          }`
        }
      >
        <span className="font-medium">{icon}</span>
        <p className="font-medium">{navLabel}</p>
      </NavLink>
    </li>
  );
};
const Sidebar = () => {
  return (
    <ul className="w-54 mt-4 py-2 shadow-md rounded-md h-fit">
      <StyledNavLink icon={<HiOutlineHome />} navLabel="Home" to="/" />
      <StyledNavLink
        icon={<HiOutlineRectangleGroup />}
        navLabel="Products"
        to="/products"
      />
      <StyledNavLink
        icon={<HiOutlineHeart />}
        navLabel="Wishlist"
        to="/wishlist"
      />
      <StyledNavLink
        icon={<HiOutlineShoppingCart />}
        navLabel="Cart"
        to="/cart"
      />
      <StyledNavLink
        icon={<HiOutlinePaperAirplane />}
        navLabel="Contact"
        to="/contact"
      />
      <StyledNavLink
        icon={<HiOutlineInformationCircle />}
        navLabel="About"
        to="/about"
      />
    </ul>
  );
};

export default Sidebar;

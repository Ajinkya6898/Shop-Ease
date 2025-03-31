import React from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlinePaperAirplane,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FiBox } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const StyledNavLink = ({ icon, navLabel, to }) => {
  return (
    <li className="h-10 mt-2 transition flex items-center gap-4 hover:bg-grey-100 hover:rounded-md">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-6  w-full h-full px-4 rounded-md hover:bg-gray-100 ${
            isActive ? "bg-gray-100 text-brand-500" : "bg-white"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <span
              className={`text-2xl ${
                isActive ? "text-brand-600" : "text-gray-900"
              }`}
            >
              {icon}
            </span>
            <p className="font-medium">{navLabel}</p>
          </>
        )}
      </NavLink>
    </li>
  );
};

const Sidebar = () => {
  return (
    <aside className="bg-white p-[3.2rem_2.4rem]  border-r-2 border-[#f3f4f6] row-span-full">
      <ul className="">
        <StyledNavLink icon={<HiOutlineHome />} navLabel="Home" to="/" />
        <StyledNavLink icon={<FiBox />} navLabel="Products" to="/products" />
        <StyledNavLink
          icon={<HiOutlineClipboardList />}
          navLabel="Orders"
          to="/orders"
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
        <StyledNavLink
          icon={<CgProfile />}
          navLabel="My Profile"
          to="/myprofile"
        />
      </ul>
    </aside>
  );
};

export default Sidebar;

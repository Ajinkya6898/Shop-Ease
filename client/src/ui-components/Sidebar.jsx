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
import { useSelector } from "react-redux";

const StyledNavLink = ({ icon, navLabel, to, count }) => {
  return (
    <li className="h-10 mt-2 transition flex items-center gap-4 hover:bg-grey-100 hover:rounded-md">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center justify-between gap-6 w-full h-full px-4 rounded-md hover:bg-gray-100 ${
            isActive ? "bg-gray-100 text-brand-500" : "bg-white"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <div className="flex items-center gap-3">
              <span
                className={`text-2xl ${
                  isActive ? "text-brand-600" : "text-gray-900"
                }`}
              >
                {icon}
              </span>
              <p className="font-medium">{navLabel}</p>
            </div>

            {count > 0 && (
              <span className="bg-red-500 text-white text-sm px-2 py-0.5 rounded-full min-w-[20px] text-center">
                {count}
              </span>
            )}
          </>
        )}
      </NavLink>
    </li>
  );
};

const Sidebar = () => {
  const wishlistCount = useSelector((state) => state.product.wishListProducts);
  const cartCount = useSelector((state) => state.product.cartProducts);

  return (
    <aside className="bg-white p-[3.2rem_2.4rem]  border-r-2 border-[#f3f4f6] row-span-full">
      <ul className="">
        <StyledNavLink icon={<HiOutlineHome />} navLabel="Home" to="/" />
        <StyledNavLink icon={<FiBox />} navLabel="Products" to="/products" />
        <StyledNavLink
          icon={<HiOutlineShoppingCart />}
          navLabel="Cart"
          to="/cart"
          count={cartCount.length}
        />
        <StyledNavLink
          icon={<HiOutlineHeart />}
          navLabel="Wishlist"
          to="/wishlist"
          count={wishlistCount.length}
        />
        <StyledNavLink
          icon={<HiOutlineClipboardList />}
          navLabel="Orders"
          to="/orders"
        />

        <StyledNavLink
          icon={<CgProfile />}
          navLabel="My Profile"
          to="/myprofile"
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
    </aside>
  );
};

export default Sidebar;

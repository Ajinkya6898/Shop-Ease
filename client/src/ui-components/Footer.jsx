import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white text-center py-12">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Stay Updated!</h3>
            <p className="mb-4">
              Subscribe to our newsletter for the latest deals and offers.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-[500px]">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input-container bg-white text-stone-950 w-full px-4 py-2 rounded-l-lg"
                />
              </div>
              <Button className="rounded-r-lg bg-brand-600">Subscribe</Button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <NavLink className="text-blue-500 hover:text-blue-700 transition">
                <FaFacebook className="text-3xl" />
              </NavLink>
              <NavLink className="text-pink-500 hover:text-pink-700 transition">
                <FaInstagram className="text-3xl" />
              </NavLink>
              <NavLink className="text-blue-400 hover:text-blue-600 transition">
                <FaTwitter className="text-3xl" />
              </NavLink>
              <NavLink className="text-blue-700 hover:text-blue-900 transition">
                <FaLinkedin className="text-3xl" />
              </NavLink>
            </div>
          </div>

          <p className="text-sm text-gray-400">
            &copy; 2025 ShopEase. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

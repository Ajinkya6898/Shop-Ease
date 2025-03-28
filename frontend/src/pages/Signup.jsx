import React from "react";
import PageHeader from "../ui-components/PageHeader";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br to-blue-100 p-6">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 space-y-6 text-gray-800">
        <PageHeader pageHeading="Create an Account" />

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-700">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-blue-500 font-semibold hover:underline"
          >
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;

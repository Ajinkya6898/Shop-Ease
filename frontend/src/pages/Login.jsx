import React from "react";
import PageHeader from "../ui-components/PageHeader";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br to-blue-100 p-6">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 space-y-6 text-gray-800">
        <PageHeader pageHeading="Login" />

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-400 transition">
            Sign In
          </button>
        </form>

        <div className="text-center">
          <p className="text-gray-600">
            Don't have an account?
            <NavLink
              to="/signup"
              className="text-blue-500 font-medium hover:underline"
            >
              {" "}
              Sign up
            </NavLink>
          </p>
          <p className="mt-2">
            <NavLink
              to="/forgotpass"
              className="text-blue-500 font-medium hover:underline"
            >
              Forgot Password?
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

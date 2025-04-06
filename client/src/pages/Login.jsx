import React, { useState } from "react";
import PageHeader from "../ui-components/PageHeader";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../slices/userSlice";

const Login = () => {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  function handleLogin(event) {
    event.preventDefault();
    if (userData) {
      dispatch(login(userData));
      navigate("/");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br to-blue-100 p-6">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 space-y-6 text-gray-800">
        <PageHeader pageHeading="Login" />

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              value={userData.userName}
              name="userName"
              onChange={handleInputChange}
              type="email"
              autoComplete="off"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              value={userData.password}
              name="password"
              onChange={handleInputChange}
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-300 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand-500 text-white p-3 rounded-lg font-semibold hover:bg-brand-600 transition"
          >
            Sign In
          </button>
        </form>

        <div className="text-center">
          <p className="text-gray-600">
            Don't have an account?
            <NavLink
              to="/signup"
              className="text-brand-500 font-medium hover:underline"
            >
              {" "}
              Sign up
            </NavLink>
          </p>
          <p className="mt-2">
            <NavLink
              to="/forgot-password"
              className="text-brand-500 font-medium hover:underline"
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

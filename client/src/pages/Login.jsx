import React, { useState } from "react";
import PageHeader from "../ui-components/PageHeader";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../slices/userSlice";
import Container from "../ui-components/Container";
import Button from "../ui-components/Button";

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
    <Container maxWidth="max-w-lg" className="parent-container">
      <PageHeader pageHeading="Login" />

      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            value={userData.userName}
            name="userName"
            onChange={handleInputChange}
            type="email"
            autoComplete="off"
            placeholder="Enter your email"
            className="input-container"
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
            className="input-container"
          />
        </div>

        <Button type="submit" size="large" className="w-full">
          Sign In
        </Button>
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
    </Container>
  );
};

export default Login;

import React from "react";
import PageHeader from "../ui-components/PageHeader";
import { NavLink } from "react-router-dom";
import Container from "../ui-components/Container";
import Button from "../ui-components/Button";

const Signup = () => {
  return (
    <Container maxWidth="max-w-lg" className="parent-container">
      <PageHeader pageHeading="Create an Account" />

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="input-container"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="input-container"
        />
        <input
          type="password"
          placeholder="Password"
          className="input-container"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input-container"
        />
        <Button type="submit" size="large" className="w-full">
          Sign Up
        </Button>
      </form>

      <p className="text-center text-gray-700">
        Already have an account?{" "}
        <NavLink
          to="/login"
          className="text-brand-500 font-semibold hover:underline"
        >
          Sign In
        </NavLink>
      </p>
    </Container>
  );
};

export default Signup;

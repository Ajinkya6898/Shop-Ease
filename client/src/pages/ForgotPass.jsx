import React, { useState } from "react";
import PageHeader from "../ui-components/PageHeader";
import { FaExclamationCircle, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";
import Container from "../ui-components/Container";
import Button from "../ui-components/Button";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  function handleForgotSubmit(event) {
    event.preventDefault();
    const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailValid = emailValidate.test(email);
    if (!isEmailValid) {
      setEmailError("Please enter a valid email ID.");
    } else {
      navigate("/forgot-password/verify-otp");
    }
  }

  return (
    <>
      <Container maxWidth="max-w-xl" className="parent-container">
        <PageHeader pageHeading="Forgot Password" />

        <div className="text-center text-gray-600">
          <FaEnvelope className="mx-auto text-5xl text-brand-500 mb-4" />
          <p className="text-base">
            Enter the email address associated with your account and we’ll send
            you a one-time password (OTP) to reset it.
          </p>
        </div>

        <form onSubmit={handleForgotSubmit}>
          <label className="block text-gray-700 font-light text-2xl mb-2 mt-6">
            Email Address
          </label>
          <input
            value={email}
            name="userName"
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            autoComplete="off"
            placeholder="Enter your email"
            className="input-container"
          />
          {emailError && (
            <p className="mt-3 text-lg text-red-600 flex items-center gap-2 animate-fadeIn">
              <FaExclamationCircle /> {emailError}
            </p>
          )}
          <Button type="submit" size="large" className="w-full mt-6">
            Get OTP
          </Button>
        </form>

        <div className="text-center text-sm mt-4 text-gray-500">
          <NavLink
            to="/login"
            className="inline-flex items-center gap-2 text-brand-600 hover:underline"
          >
            <FaArrowLeft /> Back to Login
          </NavLink>
        </div>

        <div className="text-center text-xs text-gray-400 mt-4">
          Need help?{" "}
          <NavLink to="/contact" className="text-brand-500 hover:underline">
            Contact Support
          </NavLink>
        </div>
      </Container>
    </>
  );
};

export default ForgotPass;

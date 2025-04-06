import React, { useState } from "react";
import PageHeader from "../ui-components/PageHeader";
import { FaExclamationCircle, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br to-blue-100 p-6">
        <div className="max-w-xl w-full bg-white shadow-xl rounded-2xl p-8 space-y-8 text-gray-800">
          <PageHeader pageHeading="Forgot Password" />

          <div className="text-center text-gray-600">
            <FaEnvelope className="mx-auto text-5xl text-brand-500 mb-4" />
            <p className="text-base">
              Enter the email address associated with your account and we’ll
              send you a one-time password (OTP) to reset it.
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
              className="w-full mt-3 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-300 focus:outline-none"
            />
            {emailError && (
              <p className="mt-3 text-lg text-red-600 flex items-center gap-2 animate-fadeIn">
                <FaExclamationCircle /> {emailError}
              </p>
            )}
            <button
              className="focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 outline-0 ring-offset-white w-full mt-6 bg-brand-500 text-white p-3 rounded-lg font-semibold hover:bg-brand-600 transition cursor-pointer"
              type="submit"
            >
              Get OTP
            </button>
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
        </div>
      </div>
    </>
  );
};

export default ForgotPass;

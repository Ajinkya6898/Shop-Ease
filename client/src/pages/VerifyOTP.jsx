import React from "react";
import PageHeader from "../ui-components/PageHeader";
import { FaEnvelopeOpenText, FaRedoAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Container from "../ui-components/Container";
import Button from "../ui-components/Button";

const VerifyOTP = ({ optLength = 6 }) => {
  return (
    <Container maxWidth="max-w-xl" className="parent-container">
      <PageHeader pageHeading="OTP Verification" />
      <div className="text-center text-gray-600">
        <FaEnvelopeOpenText className="mx-auto text-5xl text-brand-500 mb-3" />
        <p className="text-lg">
          We've sent a one-time password to your email <br />
          <span className="font-semibold text-brand-600">
            example@email.com
          </span>
        </p>
        <p className="text-sm mt-1">
          Please enter the {optLength}-digit code below to continue
        </p>
      </div>

      <form>
        <div className="flex justify-center mt-6">
          {Array.from({ length: optLength }).map((_, index) => (
            <input
              key={index}
              maxLength="1"
              className="border-brand-600 rounded-lg font-bold text-xl text-black transition border p-2 mx-2 w-12 h-12 text-center focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 outline-0 ring-offset-white"
            />
          ))}
        </div>
        <Button type="submit" size="large" className="mt-6 w-full">
          Submit OTP
        </Button>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <p>Didn’t receive the code?</p>
          <button
            type="button"
            className="text-brand-600 hover:text-brand-700 font-semibold flex items-center gap-1 disabled:opacity-50"
            // disabled={true} // add resend logic later
          >
            <FaRedoAlt /> Resend OTP
          </button>
        </div>

        <div className="text-center text-xs text-gray-400 mt-6">
          Need help?{" "}
          <NavLink to="/contact" className="text-brand-500 hover:underline">
            Contact Support
          </NavLink>
        </div>
      </form>
    </Container>
  );
};

export default VerifyOTP;

import React from "react";
import PageHeader from "../ui-components/PageHeader";
import { FaEnvelopeOpenText, FaRedoAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const VerifyOTP = ({ optLength = 6 }) => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br to-blue-100 p-6">
        <div className="max-w-xl w-full bg-white shadow-xl rounded-2xl p-8 space-y-8 text-gray-800">
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

            <button
              className="w-full mt-6 bg-brand-500 text-white p-3 rounded-lg font-semibold hover:bg-brand-600 transition cursor-pointer focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 outline-0 ring-offset-white"
              type="submit"
            >
              Submit OTP
            </button>

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
        </div>
      </div>
    </>
  );
};

export default VerifyOTP;

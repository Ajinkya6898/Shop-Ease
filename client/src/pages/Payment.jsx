import { useState } from "react";
import { FaCreditCard, FaPaypal, FaGoogleWallet } from "react-icons/fa";

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
          Complete Your Payment
        </h2>

        <div className="space-y-4 mb-6">
          <button
            className={`w-full flex items-center gap-3 p-4 rounded-xl font-semibold transition ${
              paymentMethod === "creditCard"
                ? "bg-brand-500 outl text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setPaymentMethod("creditCard")}
          >
            <FaCreditCard className="text-xl" /> Credit / Debit Card
          </button>
          <button
            className={`w-full flex items-center gap-3 p-4 rounded-xl font-semibold transition ${
              paymentMethod === "paypal"
                ? "bg-brand-500 outl text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setPaymentMethod("paypal")}
          >
            <FaPaypal className="text-xl" /> PayPal
          </button>
          <button
            className={`w-full flex items-center gap-3 p-4 rounded-xl font-semibold transition ${
              paymentMethod === "upi"
                ? "bg-brand-500 outl text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setPaymentMethod("upi")}
          >
            <FaGoogleWallet className="text-xl" /> UPI / Google Pay
          </button>
        </div>

        {paymentMethod === "creditCard" && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-0"
            />
            <input
              type="text"
              placeholder="Card Holder Name"
              className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-0"
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 p-3 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-0"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 p-3 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-0"
              />
            </div>
          </div>
        )}

        {paymentMethod === "paypal" && (
          <p className="text-gray-600 text-center">
            You will be redirected to PayPal to complete your payment.
          </p>
        )}

        {paymentMethod === "upi" && (
          <input
            type="text"
            placeholder="Enter UPI ID"
            className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outl"
          />
        )}

        <button className=" mt-6 w-full  bg-brand-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-brand-600 transition transform hover:scale-105 cursor-pointer">
          Pay Now
        </button>
      </div>
    </div>
  );
}

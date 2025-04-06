import { useState } from "react";
import { FaCreditCard, FaPaypal, FaGoogleWallet } from "react-icons/fa";
import Container from "../ui-components/Container";
import Button from "../ui-components/Button"; // Adjust the path as needed

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  return (
    <Container maxWidth="max-w-lg">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
        Complete Your Payment
      </h2>

      <div className="space-y-4 mb-6">
        <Button
          appearance={paymentMethod === "creditCard" ? "primary" : "secondary"}
          variant={paymentMethod === "creditCard" ? "contained" : "outlined"}
          n
          className="w-full flex items-center gap-3 justify-center"
          onClick={() => setPaymentMethod("creditCard")}
        >
          <FaCreditCard className="text-xl" /> Credit / Debit Card
        </Button>

        <Button
          appearance={paymentMethod === "paypal" ? "primary" : "secondary"}
          variant={paymentMethod === "paypal" ? "contained" : "outlined"}
          n
          className="w-full flex items-center gap-3 justify-center"
          onClick={() => setPaymentMethod("paypal")}
        >
          <FaPaypal className="text-xl" /> PayPal
        </Button>

        <Button
          appearance={paymentMethod === "upi" ? "primary" : "secondary"}
          variant={paymentMethod === "upi" ? "contained" : "outlined"}
          n
          className="w-full flex items-center gap-3 justify-center"
          onClick={() => setPaymentMethod("upi")}
        >
          <FaGoogleWallet className="text-xl" /> UPI / Google Pay
        </Button>
      </div>

      {paymentMethod === "creditCard" && (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Card Number"
            className="input-container"
          />
          <input
            type="text"
            placeholder="Card Holder Name"
            className="input-container"
          />
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-1/2 input-container"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-1/2 input-container"
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
          className="input-container"
        />
      )}

      <Button appearance="primary" variant="contained" className="w-full">
        Pay Now
      </Button>
    </Container>
  );
}

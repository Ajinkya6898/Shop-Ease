import { useState } from "react";
import FormRow from "./FormRow";
import { useForm } from "react-hook-form";
import { AiOutlineShopping } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function OrderSummary() {
  const cartProducts = useSelector((state) => state.product.cartProducts);

  const calculateTotal = () => {
    if (!cartProducts || !Array.isArray(cartProducts)) return 0;

    return cartProducts.reduce(
      (total, product) => total + product.price * (product.quantity || 1),
      0
    );
  };

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const shippingCost = 50;
  const tax = 0.18;
  const subtotal = calculateTotal();
  const discountAmount = (subtotal * discount) / 100;
  const taxAmount = subtotal * tax;
  const total = subtotal + taxAmount - discountAmount + shippingCost;

  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  const promoCodeValue = watch("promocode");

  const applyPromoCode = () => {
    if (!promoCodeValue) {
      return;
    }
  };

  return (
    <div className="bg-white backdrop-blur-xl shadow-xl border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-fit transform transition-all hover:shadow-3xl">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <AiOutlineShopping className="text-brand-500 text-3xl" />
        <span>Order Summary</span>
      </h3>

      <div className="space-y-3">
        <p className="flex justify-between">
          <span>Subtotal:</span> <span>₹ {subtotal.toFixed(2)}</span>
        </p>
        <p className="flex justify-between">
          <span>Delivery Charges:</span>{" "}
          <span>₹ {shippingCost.toFixed(2)}</span>
        </p>
        <p className="flex justify-between">
          <span>GST (18%):</span> <span>₹ {taxAmount.toFixed(2)}</span>
        </p>
        {discount > 0 && (
          <p className="text-green-400 flex justify-between">
            <span>Discount ({discount}%):</span>{" "}
            <span>- ₹ {discountAmount.toFixed(2)}</span>
          </p>
        )}
        <p className="text-lg flex justify-between font-bold border-t border-gray-600 pt-3">
          <span>Total:</span> <span>₹ {total.toFixed(2)}</span>
        </p>
      </div>

      <div className="mt-4 flex flex-col">
        <FormRow error={errors.promocode?.message}>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-brand-500 focus:outline-none"
            placeholder="Enter promo code"
            {...register("promocode")}
          />
        </FormRow>

        <button
          onClick={applyPromoCode}
          className="self-end mt-0.5 text-brand-500 text-sm font-semibold hover:underline cursor-pointer transition duration-200"
        >
          Apply Promo Code
        </button>
      </div>

      <button className=" mt-6 w-full  bg-brand-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-brand-600 transition transform hover:scale-105">
        Proceed to Checkout
      </button>
    </div>
  );
}

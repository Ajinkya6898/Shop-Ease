import React from "react";
import Alert from "../ui-components/Alert";
import { useSelector, useDispatch } from "react-redux";
import MESSAGES from "../constant";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import OrderSummary from "../ui-components/OrderSummary";
import PageHeader from "../ui-components/PageHeader";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

const Cart = () => {
  const cartProducts = useSelector((state) => state.product.cartProducts);
  const dispatch = useDispatch();

  const calculateTotal = () =>
    cartProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );

  return (
    <>
      <PageHeader pageHeading="Your Cart" />
      {cartProducts.length === 0 ? (
        <div className="flex flex-col items-center mt-10 space-y-5 text-gray-500">
          <MdOutlineRemoveShoppingCart className="text-6xl text-brand-500" />
          <Alert type="info" message={MESSAGES.CART_EMPTY} />
        </div>
      ) : (
        <>
          <div className="max-w-8xl mx-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
                {cartProducts.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b py-4"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    <div className="flex-1 ml-4">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-500">₹ {item.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md"
                      >
                        −
                      </button>
                      <span className="mx-3 font-medium">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-4 text-red-500 hover:text-red-700"
                    >
                      <FaTrash size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <OrderSummary calculateTotal={calculateTotal} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;

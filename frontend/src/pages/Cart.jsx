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
          <div className="max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {cartProducts.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center bg-white p-5 rounded-2xl shadow-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />

                    <div className="flex-1 ml-5">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-500">₹ {item.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-9 h-9 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-lg font-bold"
                      >
                        −
                      </button>
                      <span className="mx-4 font-semibold text-lg">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-9 h-9 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-lg font-bold"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-5 text-red-500 hover:text-red-700"
                    >
                      <FaTrash size={20} />
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

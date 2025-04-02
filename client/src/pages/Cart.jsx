import React from "react";
import Alert from "../ui-components/Alert";
import { useSelector, useDispatch } from "react-redux";
import MESSAGES from "../constant";
import { FaPlus, FaMinus } from "react-icons/fa";
import OrderSummary from "../ui-components/OrderSummary";
import PageHeader from "../ui-components/PageHeader";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import {
  decreaseProductQty,
  increaseProductQty,
  removeFromCart,
} from "../slices/productSlice";
import { useModal } from "../ui-components/ModalProvider";

const Cart = () => {
  const cartProducts = useSelector((state) => state.product.cartProducts);
  const dispatch = useDispatch();
  const { modalDispatch } = useModal();

  function removeProduct(product) {
    modalDispatch({
      type: "warning",
      message: (
        <>
          Are you sure you want to remove <br /> <br />
          <p className="text-brand-500">{product.title}</p> <br />
          this item from the cart?
        </>
      ),
      onConfirm: () => {
        dispatch(removeFromCart(product.id));
      },
    });
  }

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
                      <h3 className="text-lg font-semibold capitalize">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 mt-2 capitalize">
                        {item.category}
                      </p>
                      <p className="text-gray-900 font-semibold mt-2">
                        ₹ {item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <button
                        onClick={() => dispatch(decreaseProductQty(item.id))}
                        className="w-9 h-9 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center cursor-pointer"
                      >
                        <FaMinus />
                      </button>
                      <span className="mx-4 font-semibold text-lg">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(increaseProductQty(item.id))}
                        className="w-9 h-9 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center cursor-pointer"
                      >
                        <FaPlus />
                      </button>
                    </div>

                    <button
                      onClick={() => removeProduct(item)}
                      className="ml-5 text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      <AiOutlineDelete size={28} />
                    </button>
                  </div>
                ))}
              </div>

              <OrderSummary />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;

import React from "react";
import Alert from "../ui-components/Alert";
import { useDispatch, useSelector } from "react-redux";
import { MESSAGES } from "../constant";
import PageHeader from "../ui-components/PageHeader";
import { FaHeartBroken } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { moveToCart, removeFromWishlist } from "../slices/productSlice";
import { useModal } from "../ui-components/ModalProvider";
import Container from "../ui-components/Container";
import Button from "../ui-components/Button";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { modalDispatch } = useModal();
  const wishlistProducts = useSelector(
    (state) => state.product.wishListProducts
  );

  function removeItem(product) {
    modalDispatch({
      type: "warning",
      message: (
        <>
          Are you sure you want to remove <br /> <br />
          <p className="text-brand-500">{product.title}</p> <br />
          this item from the wishlist?
        </>
      ),
      onConfirm: () => {
        dispatch(removeFromWishlist(product.id));
      },
    });
  }

  function addToCart(product) {
    dispatch(
      moveToCart({
        ...product,
        quantity: 1,
      })
    );
  }

  return (
    <Container maxWidth="max-w-9xl">
      <PageHeader pageHeading="Your Wishlist" />

      {wishlistProducts.length === 0 ? (
        <div className="flex flex-col items-center mt-10 space-y-5 text-gray-500">
          <FaHeartBroken className="text-6xl text-brand-500" />
          <Alert type="info" message={MESSAGES.WISHLIST_EMPTY} />
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {wishlistProducts.map((item) => (
            <div
              key={item.id}
              className="relative bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-36 h-36 object-cover rounded-xl shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                {item.title}
              </h3>
              <p className="text-brand-600 font-bold text-lg mt-2">
                ₹ {item.price}
              </p>

              <div className="flex mt-5 space-x-3">
                <Button
                  onClick={() => addToCart(item)}
                  className="flex items-center space-x-2"
                >
                  <span className="text-2xl">
                    <HiOutlineShoppingCart />
                  </span>
                  <span>Move to Cart</span>
                </Button>
                <Button
                  onClick={() => removeItem(item)}
                  className="flex items-center space-x-2"
                  appearance="error"
                >
                  <span className="text-2xl">
                    <RiDeleteBin7Line />
                  </span>
                  <span>Remove</span>
                </Button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-200/20 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Wishlist;

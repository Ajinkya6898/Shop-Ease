import React from "react";
import { motion } from "framer-motion";
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
        <div className="mt-8 space-y-6">
          {wishlistProducts.map((item) => (
            <motion.div
              key={item.id}
              className="flex items-center justify-between gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              layout
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-brand-600 font-bold mt-1">
                    ₹ {item.price}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 min-w-fit">
                <Button
                  onClick={() => addToCart(item)}
                  className="flex items-center gap-1 text-sm"
                >
                  <HiOutlineShoppingCart />
                  Move to Cart
                </Button>
                <Button
                  onClick={() => removeItem(item)}
                  className="flex items-center gap-2 text-sm"
                  appearance="error"
                  variant="outlined"
                >
                  <RiDeleteBin7Line />
                  Remove
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Wishlist;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  wishListProducts: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartProducts.push(action.payload);
    },
    addToWishList(state, action) {
      const isInWishList = state.wishListProducts.some((elem) => {
        return elem.id === action.payload.id;
      });
      if (isInWishList) return;
      state.wishListProducts.push(action.payload);
    },
    removeFromCart(state, action) {
      state.cartProducts = state.cartProducts.filter((product) => {
        return product.id !== action.payload;
      });
    },
    increaseProductQty(state, action) {
      const product = state.cartProducts.find((product) => {
        return product.id === action.payload;
      });
      product.quantity = product.quantity + 1;
    },
    decreaseProductQty(state, action) {
      const product = state.cartProducts.find(
        (product) => product.id === action.payload
      );
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.cartProducts = state.cartProducts.filter(
            (p) => p.id !== action.payload
          );
        }
      }
    },
    moveToCart(state, action) {
      const product = state.wishListProducts.find(
        (p) => p.id === action.payload.id
      );

      const alreadyInCart = state.cartProducts.some((elem) => {
        return (elem.id = action.payload.id);
      });

      if (product && !alreadyInCart) {
        state.cartProducts.push({
          ...product,
          quantity: action.payload.quantity || 1,
        });
        state.wishListProducts = state.wishListProducts.filter(
          (element) => element.id !== product.id
        );
      } else {
        state.wishListProducts = state.wishListProducts.filter(
          (element) => element.id !== product.id
        );
      }
    },

    removeFromWishlist(state, action) {
      state.wishListProducts = state.wishListProducts.filter((pro) => {
        return pro.id !== action.payload;
      });
    },
  },
});

export const {
  addToCart,
  addToWishList,
  removeFromCart,
  increaseProductQty,
  decreaseProductQty,
  moveToCart,
  removeFromWishlist,
} = productSlice.actions;

export default productSlice.reducer;

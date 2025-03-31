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
      state.wishListProducts.push(action.payload);
    },
    moveToCart(state, action) {},
  },
});

export const { addToCart, addToWishList } = productSlice.actions;

export default productSlice.reducer;

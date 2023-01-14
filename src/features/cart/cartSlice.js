import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const selectedCart = state.carts.find(
        (product) => product._id === action.payload._id
      );
      if (!selectedCart) {
        state.carts.push({ ...action.payload, quantity: 1 });
      } else {
        selectedCart.quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      const selectedCart = state.carts.find(
        (product) => product._id === action.payload._id
      );
      if (selectedCart.quantity > 1) {
        selectedCart.quantity -= 1;
      } else {
        state.carts = state.carts.filter(
          (product) => product._id !== selectedCart._id
        );
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

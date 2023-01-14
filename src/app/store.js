import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";

const store = configureStore({
    devTools: true,
    reducer: {
        cart: cartSlice,
    },
});

export default store;
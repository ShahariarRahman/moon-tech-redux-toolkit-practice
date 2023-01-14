import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";

const store = configureStore({
    devTools: true,
    reducer: {
        carts: cartSlice,
    },
});

export default store;
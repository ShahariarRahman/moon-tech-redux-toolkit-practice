import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";

const store = configureStore({
    devTools: true,
    reducer: {
        cart: cartSlice,
        filter: filterSlice,
    },
});

export default store;

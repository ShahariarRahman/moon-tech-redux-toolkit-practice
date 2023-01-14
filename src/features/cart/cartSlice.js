import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
};

const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const selectedCart = state.carts.find(product => product._id === action.payload._id);
            if (!selectedCart) {
                state.carts.push(action.payload);
            };
        },
        removeFromCart: (state, action) => {

        },
    },
});

export default cartSlice.reducer;
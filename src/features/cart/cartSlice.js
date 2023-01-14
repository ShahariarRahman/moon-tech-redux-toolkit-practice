import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
};

const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {},
});

export default cartSlice.reducer;
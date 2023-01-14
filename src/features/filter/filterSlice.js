import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stock: false,
  brands: [],
  keyword: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggle: (state) => {
      state.stock = !state.stock;
    },
    toggleBrand: (state, action) => {},
  },
});

export const { toggle, toggleBrand } = filterSlice.actions;
export default filterSlice.reducer;

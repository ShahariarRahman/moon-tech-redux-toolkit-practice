import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsAPI";

const initialState = {
  products: [],
  isLoading: false,
  postSuccess: false,
  deleteSuccess: false,
  isError: false,
  error: "",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const products = fetchProducts();
    return products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
      state.postSuccess = false;
      state.deleteSuccess = false;
      state.isError = false;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      state.postSuccess = false;
      state.deleteSuccess = false;
      state.isError = false;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.postSuccess = false;
      state.deleteSuccess = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export default productsSlice.reducer;

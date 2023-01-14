import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts, postProducts } from "./productsAPI";

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
export const addProducts = createAsyncThunk(
  "products/addProducts",
  async (data) => {
    const products = postProducts(data);
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
      state.error = action.error.message;
    });
    builder.addCase(addProducts.pending, (state) => {
      state.isLoading = true;
      state.postSuccess = false;
      state.deleteSuccess = false;
      state.isError = false;
    });
    builder.addCase(addProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.postSuccess = true;
      state.deleteSuccess = false;
      state.isError = false;
    });
    builder.addCase(addProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.postSuccess = false;
      state.deleteSuccess = false;
      state.isError = true;
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;

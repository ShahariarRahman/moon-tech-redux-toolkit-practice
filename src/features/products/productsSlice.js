import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteProduct, fetchProducts, postProduct } from "./productsAPI";

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
  "products/addProduct",
  async (data) => {
    const products = postProduct(data);
    return products;
  }
);
export const removeProducts = createAsyncThunk(
  "products/removeProduct",
  async (id) => {
    const products = deleteProduct(id);
    return products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.postSuccess = false;
        state.deleteSuccess = false;
        state.isError = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.postSuccess = false;
        state.deleteSuccess = false;
        state.isError = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.postSuccess = false;
        state.deleteSuccess = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(addProducts.pending, (state) => {
        state.isLoading = true;
        state.postSuccess = false;
        state.deleteSuccess = false;
        state.isError = false;
      })
      .addCase(addProducts.fulfilled, (state) => {
        state.isLoading = false;
        state.postSuccess = true;
        state.deleteSuccess = false;
        state.isError = false;
      })
      .addCase(addProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.postSuccess = false;
        state.deleteSuccess = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(removeProducts.pending, (state) => {
        state.isLoading = true;
        state.postSuccess = false;
        state.deleteSuccess = false;
        state.isError = false;
      })
      .addCase(removeProducts.fulfilled, (state) => {
        state.isLoading = false;
        state.postSuccess = false;
        state.deleteSuccess = true;
        state.isError = false;
      })
      .addCase(removeProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.postSuccess = false;
        state.deleteSuccess = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;

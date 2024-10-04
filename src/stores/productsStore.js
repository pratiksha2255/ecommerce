import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const getProducts = createAsyncThunk(
  "products/getProducts", // Action name, not the API URL
  async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products/");
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  productList: [],
  loading: "idle",
};

const productSclice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productList = action.payload.products;
      state.loading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default productSclice.reducer;

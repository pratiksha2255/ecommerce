import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPaginatedProducts = createAsyncThunk(
  "products/getPaginatedProducts",
  async (skip) => {
    try {
      console.log(skip, "+++++++++++++++++++++");
      const response = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${skip}`
      );
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

const paginatedSclice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPaginatedProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPaginatedProducts.fulfilled, (state, action) => {
      state.productList = action.payload.products;
      state.loading = false;
    });
    builder.addCase(getPaginatedProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default paginatedSclice.reducer;

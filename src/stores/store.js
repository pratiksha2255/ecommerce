import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices";
import productSclice from "./productsStore";
import paginatedSclice from "./paginationStore";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    productsStore: productSclice,
    paginatedStore: paginatedSclice,
  },
});

export default store;

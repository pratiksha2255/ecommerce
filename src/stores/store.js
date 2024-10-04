import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices";
import productSclice from "./productsStore";

const store = configureStore({
  reducer: { cart: cartSlice, productsStore: productSclice },
});

export default store;

import { configureStore, Tuple } from "@reduxjs/toolkit";
import cartSlice from "./slices";

const store = configureStore({
  reducer: { cart: cartSlice },
});

export default store;

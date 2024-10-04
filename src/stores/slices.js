import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("cart_items"))
      ? JSON.parse(localStorage.getItem("cart_items")).length
      : 0,
  },
  reducers: {
    incrementcart(state) {
      state.value++;
    },
    decrementcart(state) {
      state.value--;
    },
  },
});

export const { incrementcart, decrementcart } = cartSlice.actions;
export default cartSlice.reducer;

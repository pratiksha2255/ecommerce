import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { value: 0 },
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

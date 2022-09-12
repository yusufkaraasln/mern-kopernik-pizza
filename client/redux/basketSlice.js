import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    products: [],
    totalPrice: 0,
    quantity: 0,
  },
  reducers: {
    addPizzaToBasket: (state, action) => {
      state.products.push(action.payload);
      state.totalPrice += action.payload.price * action.payload.quantity;
      state.quantity += 1;
    },
    resetBasket: (state) => {
      state.product = [];
      state.totalPrice = 0;
      state.quantity = 0;

    },
    
  },
});

export const { addPizzaToBasket, resetBasket } = basketSlice.actions;
export default basketSlice.reducer;

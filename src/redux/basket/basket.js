import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basketList: [],
  },
  reducers: {
    addToBasket(state, action) {
      const isExist = state.basketList.some((item) => item === action.payload);
      if (!isExist) {
        state.basketList.push(action.payload);
      }
    },
    removeFromBasket(state, action) {
      state.basketList = state.basketList.filter(
        (item) => item !== action.payload
      );
    },
    clearBasket(state) {
      state.basketList = [];
    },
    incrementQuantity(state, action) {
      state.basketList = state.basketList.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decrementQuantity(state, action) {
      state.basketList = state.basketList.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  clearBasket,
  incrementQuantity,
  decrementQuantity,
} = basketSlice.actions;

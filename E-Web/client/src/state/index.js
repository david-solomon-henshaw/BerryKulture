import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
    
      if (existingItem) {
        // If the item is already in the cart, update its quantity
        existingItem.quantity += newItem.quantity;
      } else {
        // If it's a new item, add it to the cart
        state.cart = [...state.cart, newItem];
      }
    },
    
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseCount: (state, action) => {
      const targetItemId = action.payload.id;
      state.cart = state.cart.map((item) => {
        if (item.id === targetItemId) {
          item.quantity++; // Increase the quantity of the target item
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      const targetItemId = action.payload.id;
      state.cart = state.cart.map((item) => {
        if (item.id === targetItemId && item.quantity > 1) {
          item.quantity--; // Decrease the quantity of the target item
        }
        return item;
      });
    },
    
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
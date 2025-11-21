import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],   // list of cart items
    totalQuantity: 0, // total items count
    warningMessage: null,
  },

  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload; // product data
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;  // increase qty
      } else {
        state.items.push({
          ...newItem,
          quantity: 1
        });
      }

      state.totalQuantity += 1;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;

      // remove from items array
      state.items = state.items.filter(item => item.id !== id);
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
      }
    },

      decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);

      if (!item) return;

      if (item.quantity === 1) {
        // Instead of removing → show warning
        state.warningMessage = "Minimum quantity reached!";
        return;
      }

      item.quantity -= 1;
      state.totalQuantity -= 1;
      state.warningMessage = null;
    },
    clearWarning: (state) => {
      state.warningMessage = null;
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearWarning,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;

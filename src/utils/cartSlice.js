import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],   // list of cart items
    totalQuantity: 0, // total items count
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
        // console.log(state.items[0])
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

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
      }
      else if (item && item.quantity === 1) {
        // remove when quantity becomes 0
        state.items = state.items.filter(i => i.id !== id);
        state.totalQuantity -= 1;
      }
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} = cartSlice.actions;

export default cartSlice.reducer;

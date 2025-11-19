import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name: "cart",
        initialState: { value: 0 },
        reducers: {
            increment(state) {
                state.value++;
            },
            decrement(state) {
                state.value--;
            },
            reset(state) {
                state.value = 0;
            }
        }
    }
);

export const { increment, decrement, reset } = cartSlice.actions;

export default cartSlice.reducer
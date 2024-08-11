import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },

        decrement: (state) => {
            state.value -= 1
        },

        decrementByValue: (state, action) => {
            state.value -= action.payload
        }
    }
})

const counterReducer = counterSlice.reducer;

export const {increment, decrement, decrementByValue} = counterSlice.actions;
export default counterReducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}
const counterSlice = createSlice({
    name: "Counter",
    initialState,
    reducers: {
        // increment: (state) => {
        //     // state.count = state.count + 1
        //     state.count += 1;
        // },

        // increment my function number
        increment: (state, action) => { state.count = state.count + action.payload },
        // decrement by 1
        // decrement: (state) => {
        //     state.count = state.count - 1
        // },

        // decrement by function parameter number
        decrement: (state, action) => {
            state.count = state.count - action.payload
        }
    }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
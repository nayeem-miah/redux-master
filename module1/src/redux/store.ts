import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../redux/features/counter/counterSlice"
export const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})

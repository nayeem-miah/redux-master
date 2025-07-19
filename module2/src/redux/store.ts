import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../redux/features/counter/counterSlice"
// import logger from "./middlewares/logger";
export const store = configureStore({
    reducer: {
        counter: counterSlice
    },
    // middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
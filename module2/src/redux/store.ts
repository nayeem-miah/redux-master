import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counter/counterSlice"
import taskReducer from "../redux/features/task/TaskSlice"
// import logger from "./middlewares/logger";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: taskReducer
    },
    // middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
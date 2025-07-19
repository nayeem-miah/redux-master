import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[],
    filter: "all" | "high" | "medium" | "low"
}
const initialState: InitialState = {
    tasks: [
        {
            id: "1",
            title: "Frontend Setup",
            description: "Create layout and routing",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "high"
        },
        {
            id: "2",
            title: "Git Init",
            description: "Push to GitHub",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "medium"
        },
        {
            id: "irtejhdfgh",
            title: "initialize frontend",
            description: "Create Home page and Routing .............",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "high"
        },
        {
            id: "irtejhdfgh",
            title: "initialize frontend",
            description: "Create Home page and Routing .............",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "high"
        },
        {
            id: "irtejhdfgh",
            title: "initialize frontend",
            description: "Create Home page and Routing .............",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "low"
        },
        {
            id: "irtejhdfgh",
            title: "initialize frontend",
            description: "Create Home page and Routing .............",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "medium"
        },
        {
            id: "irtejhgsdfgdfgh",
            title: "initialize backend",
            description: "Create Home page and Routing .............",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "high"
        },
        {
            id: "dff",
            title: "initialize git",
            description: "code push on github .............",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "high"
        },
    ],
    filter: "all"
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export const selectTask = (state: RootState) => {
    return state.todo.tasks
}

export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export default taskSlice.reducer;
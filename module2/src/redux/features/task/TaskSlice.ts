import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from 'uuid';
interface InitialState {
    tasks: ITask[],
    filter: "all" | "high" | "medium" | "low"
}
const initialState: InitialState = {
    tasks: [
        {
            id: "61uYTgNF12fxDlNQiOH9o",
            title: "learning node js",
            description: "and then learning express ",
            dueDate: "2020-2-23",
            isCompleted: false,
            priority: "low"
        }
    ],
    filter: "all"
};


type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (draftTask: DraftTask): ITask => {
    return {
        id: nanoid(),
        isCompleted: false,
        ...draftTask,
        // dueDate: draftTask.dueDate.toString()
    }
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            // const id = uuidv4();
            // const taskData = {
            //     ...action.payload,
            //     id,
            //     isCompleted: false
            // }
            const taskData = createTask(action.payload)

            state.tasks.push(taskData)
        },
        toggleCompletedTask: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.tasks.forEach((task) => task.id === id ?
                (task.isCompleted = !task.isCompleted) : task);
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.tasks = state.tasks.filter((task) => task.id !== id)

        },
        updateTask: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            console.log(id);
        },
        updateFilter: (state, action: PayloadAction<"high" | "medium" | "low">) => {
            state.filter = action.payload
        }
    }
})

export const selectTask = (state: RootState) => {
    return state.todo.tasks
}

export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export const {
    addTask,
    toggleCompletedTask,
    deleteTask,
    updateTask
} = taskSlice.actions;

export default taskSlice.reducer;
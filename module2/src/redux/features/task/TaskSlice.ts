import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../users/userSlice";
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
            priority: "low",
            assignTo: null
        }
    ],
    filter: "all"
};


type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority" | "assignTo">;

const createTask = (draftTask: DraftTask): ITask => {
    return {
        ...draftTask,
        id: nanoid(),
        isCompleted: false,
        assignTo: draftTask.assignTo ? draftTask.assignTo : null
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
        updateFilter: (state, action: PayloadAction<"all" | "high" | "medium" | "low">) => {
            state.filter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(removeUser, (state, action) => {
            state.tasks.forEach((task) =>
                task.assignTo === action.payload ?
                    (task.assignTo = null) : task)
        })
    }
});

export const selectTask = (state: RootState) => {
    const filter = state.todo.filter;

    if (filter === "low") {
        return state.todo.tasks.filter(task => task.priority === "low");
    } else if (filter === "medium") {
        return state.todo.tasks.filter(task => task.priority === "medium");
    } else if (filter === "high") {
        return state.todo.tasks.filter(task => task.priority === "high");
    } else {
        return state.todo.tasks
    }
}

export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export const {
    addTask,
    toggleCompletedTask,
    deleteTask,
    updateTask,
    updateFilter
} = taskSlice.actions;

export default taskSlice.reducer;
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    users: IUser[]
}

const initialState: InitialState = {
    users: [
        {
            id: "1",
            name: "nayeem"
        }
    ]
};

type DraftUser = Pick<IUser, "name">

const createUser = (draftUser: DraftUser): IUser => {
    return {
        id: nanoid(),
        ...draftUser
    }
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            const userData = createUser(action.payload);
            state.users.push(userData)
        },
        removeUser: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            console.log(id);
            const users = state.users.filter((user) => user.id !== id);
            state.users = users
        }
    }
})


export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer
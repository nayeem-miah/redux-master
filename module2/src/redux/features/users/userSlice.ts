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
}

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
        }
    }
})


export const { addUser } = userSlice.actions;

export default userSlice.reducer
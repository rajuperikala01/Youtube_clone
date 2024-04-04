import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {}
}

export const firstSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setUser : (state, action) => {
            state.user = action.payload;
        }
    }
})

export default firstSlice.reducer;
export const { setUser } = firstSlice.actions;
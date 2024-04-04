import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const commentSlice = createSlice({
    name:"commentSlice",
    initialState,
    reducers: {
        commentStatus : (state, action) => {
            return action.payload;
        }
    }
})

export default commentSlice.reducer;

export const {commentStatus} = commentSlice.actions;
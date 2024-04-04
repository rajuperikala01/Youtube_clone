import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: ""
};

export const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        status: (state, action) => {
            state.status = action.payload;
        }
    }
})

export default statusSlice.reducer;
export const {status} = statusSlice.actions;
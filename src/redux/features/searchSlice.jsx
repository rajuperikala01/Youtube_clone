import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const searchSlice = createSlice({
    name:'input',
    initialState,
    reducers: {
        inputterm: (state, action) => {
            return action.payload;
        }
    }
})

export default searchSlice.reducer;
export const {inputterm} = searchSlice.actions;
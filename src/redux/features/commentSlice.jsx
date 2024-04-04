import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: {}
};

export const commentSlice = createSlice({
    name:"comments",
    initialState,
    reducers: {
        addComments: (state, action) => {
            state.comments = action.payload;
        },
        addNextComments: (state, action) => {
            state.comments = {
                ...state.comments,
                items: state.comments.items.concat(action.payload.items),
                nextPageToken: action.payload.nextPageToken
            };
        }
    }
})

export default commentSlice.reducer;
export const {addComments, addNextComments} = commentSlice.actions;
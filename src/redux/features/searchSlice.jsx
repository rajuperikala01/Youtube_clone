import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videos:{}
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchvideos: (state, action) => {
            state.videos = action.payload;
        },
        addSearchvideos: (state, action) => {
            state.videos = {
                ...state.videos,
                items: state.videos.items.concat(action.payload.items),
                nextPageToken: action.payload.nextPageToken
            };
        }
    }
});

export default searchSlice.reducer;
export const { searchvideos, addSearchvideos } = searchSlice.actions;

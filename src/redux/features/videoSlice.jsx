import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videos: {}
};

export const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        addVideos: (state, action) => {
            state.videos = action.payload;
        },
        nextPageVideos : (state, action) => {
            state.videos = {
                ...state.videos,
                items: state.videos.items.concat(action.payload.items),
                nextPageToken: action.payload.nextPageToken
            };
        }
    }
})

export default videoSlice.reducer;
export const { addVideos, nextPageVideos } = videoSlice.actions;
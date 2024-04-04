import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommendedVideos: {}
}

const recommended = createSlice({
    name: "recommendedVideos",
    initialState,
    reducers: {
        addRecommendedVideos : (state, action) => {
            state.recommendedVideos = action.payload;
        }
    }
})

export default recommended.reducer;
export const {addRecommendedVideos} = recommended.actions;
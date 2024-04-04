import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import videoReducer from './features/videoSlice';
import statusReducer from "./features/statusSlice";
import searchReducer from './features/searchSlice';
import commentReducer from './features/commentSlice';
import commentStatus from './features/commentStatus';
import recommended from './features/recommended';

export const store = configureStore({
    reducer: {
        user: userReducer,
        videos: videoReducer,
        status: statusReducer,
        input: searchReducer,
        commentsState: commentReducer,
        commentStatus: commentStatus,
        recommended: recommended,
    }
})
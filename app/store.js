import { configureStore } from "@reduxjs/toolkit"
import postsReducer from "../features/userPostsSlice"

export const store = configureStore({
    reducer:{
        posts: postsReducer
    }
}) 

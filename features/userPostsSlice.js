import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


let initialState = {
    userPosts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


export const fetchPosts = createAsyncThunk('fetch/posts', async (_, thunkAPI) => {
    let post, users, comments
    let merged = []
    try {
        post = await axios.get("https://jsonplaceholder.typicode.com/posts")

        post = post.data.length == 0 ? [] : post

        users = post.data ? await axios.get("https://jsonplaceholder.typicode.com/users") : []

        comments = users.data ? await axios.get("https://jsonplaceholder.typicode.com/comments") : []

        post = post.data
        users = users.data
        comments = comments.data

        for (let i = 0; i < post?.length; i++) {
            merged.push({
                post: { ...post[i] },
                user: { ...(users.find((itmInner) => itmInner.id === post[i].userId)) },
                comment: comments.filter((item) => item.postId === post[i].id)

            });
        }

        return merged.slice(0, 20)

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

export const userPostsSlice = createSlice({
    name: 'userPosts',
    initialState,
    reducers: {
        reset: (state) => initialState,
        deletePost: (state, action) => {
            state.userPosts = state.userPosts.filter((item) => item.post.id !== action.payload.id)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.userPosts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }

})

export const { deletePost, reset } = userPostsSlice.actions

export default userPostsSlice.reducer
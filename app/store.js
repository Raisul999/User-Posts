import { configureStore, combineReducers } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import postsReducer from "../features/userPostsSlice"
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    posts: postsReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: [thunk]
}) 

export const persistor = persistStore(store)

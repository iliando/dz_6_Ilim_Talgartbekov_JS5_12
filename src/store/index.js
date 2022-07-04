import {configureStore} from "@reduxjs/toolkit";
import titleReducer from './titleSlice'
import usersReducer from './usersSlice'

export default configureStore({
    reducer: {
        title: titleReducer,
        users: usersReducer
    }
})
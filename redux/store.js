"use client"

import {configureStore} from '@reduxjs/toolkit'
import authReducer from './app/auth/authSlice'

export default configureStore({
    reducer: {
        auth: authReducer
    }
})


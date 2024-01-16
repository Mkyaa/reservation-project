"use client"
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    ticket: null,
    information: null,
    reservation: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        setTicket(state, action) {
            state.ticket = action.payload
        },
        setInformation(state, action) {
            state.information = action.payload
        },
        setReservation(state, action) {
            state.reservation = action.payload
        }
    }
})

export const { setUser, setTicket, setInformation, setReservation } = authSlice.actions

export default authSlice.reducer

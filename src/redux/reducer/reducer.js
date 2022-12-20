import { createSlice } from '@reduxjs/toolkit'

export const usersReducer = createSlice({
    name: 'users',
    initialState: {
        firstName: '',
        lastName: '',
        token: '',
        email: '',
        password: '',
        loggedIn: false,
        currentState: '',
    },
    reducers: {
        token: (state, payload) => {
            state.token = payload.payload.token
            state.loggedIn = true
        },
        profile: (state, payload) => {
            state.firstName = payload.payload.firstName
            state.lastName = payload.payload.lastName
            state.email = payload.payload.email
        },
    },
})

export const { token, profile } = usersReducer.actions

export default usersReducer.reducer

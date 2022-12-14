import { configureStore } from '@reduxjs/toolkit'
import {usersReducer} from './reducer/reducer'

const initialState = {
    firstName: '',
    lastName: '',
    token: '',
    email: '',
    password: '',
    loggedIn: false,
    currentState: '',
}

const store = configureStore({
    reducer: usersReducer.reducer
})

// subscribe permet de suivre les changements de state
store.subscribe(() => {
    // on utilise getState pour récupérer le state
    const state = store.getState()
})

export default store
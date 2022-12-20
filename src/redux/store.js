import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { usersReducer } from './reducer/reducer'

const store = configureStore({
    reducer: usersReducer.reducer,
    middleware: [thunk],
})

console.log(store.getState())

export default store

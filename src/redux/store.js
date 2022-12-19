import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './reducer/reducer'

const store = configureStore({
    reducer: usersReducer.reducer,
})

export default store

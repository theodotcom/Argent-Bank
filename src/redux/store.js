import { createStore } from 'react-redux'

const initialState = {
    firstName: '',
    lastName: '',
    token: '',
    email: '',
    password: '',
    loggedIn: false,
    currentState: '',
}

const store = createStore(reducer, initialState)

// subscribe permet de suivre les changements de state
store.subscribe(() => {
    // on utilise getState pour récupérer le state
    const state = store.getState()
})

export { initialState }

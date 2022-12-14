import { initialState } from '../store'

// le reducer est une fonction
function reducer(state, action) {
    // si l'action est de type playPause...
    if (action.type === 'UserSignin') {
        // ... il faut inverser la propriété playing du state
        return {
            ...state,
            playing: !state.playing,
        }
    }
    // sinon on retourne le state sans le changer
    return state
}

export function usersReducer(state = initialState, action) {
    const { payload } = action
    switch (action.type) {
        case 'userSignin':
            return {
                ...state,
                loggedIn: true,
                token: action.payload.token,
                currentState: 'logged',
            }
        case 'getUserDatas':
            return {
                ...state,
                firstName: payload.firstName,
                lastName: payload.lastName,
            }
        case 'editUserDatas':
            return {
                ...state,
                firstName: payload.firstName,
                lastName: payload.lastName,
            }
        case 'userNotFound':
            return {
                ...state,
                error: true,
                currentState: 'failed',
            }
        default:
            return state
    }
}

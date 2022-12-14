const playPause = () => ({ type: 'playPause' })

const getUserToken = (token) => ({
    type: 'userToken',
    token,
})

const getUserDatas = (firstName, lastName, token) => ({
    type: 'getUserDatas',
    payload: {
        firstName: firstName,
        lastName: lastName,
        token: token,
    },
})

const editUserDatas = (firstName, lastName) => ({
    type: 'editUserDatas',
    payload: {
        firstName: firstName,
        lastName: lastName,
    },
})

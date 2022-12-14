const playPause = () => ({ type: 'playPause' })

const signing = (email, password) => ({
    type: 'userSignin',
    payload: { email: email, password: password },
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

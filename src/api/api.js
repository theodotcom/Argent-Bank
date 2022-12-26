const signin = (email, password) => {
    return fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            return data.body.token
            //return getProfileInfos(data.body.token)
        })
}

const getProfileInfos = (token) => {
    return fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            return data.body
        })
}

const modifyProfile = (token, udpdatedFirstName, udpdatedLastName) => {
    return fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            firstName: udpdatedFirstName,
            lastName: udpdatedLastName,
        }),
    }).then((res) => res.json())
}
export { getProfileInfos, modifyProfile, signin }

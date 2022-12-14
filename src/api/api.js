const signin = (email, password) => {
    fetch('http://localhost:3001/api/v1/user/login', {
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
            console.log(data)
            getProfileInfos(data.body.token)
        })
}

const getProfileInfos = (token) => {
    fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
        .then((res) => res.json())
        .then((d) => {
            console.log(d)
        })
}

// const signup = () => {
//     fetch('http://localhost:3001/api/v1/user/signup', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             email: 'string',
//             password: 'string',
//             firstName: 'string',
//             lastName: 'string',
//         }),
//     })
// }

const modifyProfile = (token, udpdatedFirstName, udpdatedLastName) => {
    fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            firstName: udpdatedFirstName,
            lastName: udpdatedLastName,
        }),
    })
        .then((res) => {
            if (res.ok) {
                console.log('Profile successfully modified')
            } else {
                console.log('Profile unsuccessfully modified')
            }
            return res
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
}
export { getProfileInfos, modifyProfile, signin }

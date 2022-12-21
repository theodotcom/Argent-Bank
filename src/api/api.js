import thunk from 'redux-thunk'
import { useDispatch, useSelector } from 'react-redux'

// const dispatch = useDispatch()
// const signin = (email, password) => {
//     return (dispatch) => {
//          return fetch('http://localhost:3001/api/v1/user/login', {
//              method: 'POST',
//              headers: {
//                  'Content-Type': 'application/json',
//              },
//              body: JSON.stringify({
//                  email: email,
//                  password: password,
//              }),
//          })
//              .then((res) => res.json())
//              .then((data) => {
//                  // Dispatch an action to update the state with the token
//            dispatch(token({ token: data.body.payload }))
//              })
//      }
//  }

// const getProfileInfos = (token) => {
//     return (dispatch) => {
//         return fetch('http://localhost:3001/api/v1/user/profile', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${token}`,
//             },
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 dispatch(
//                     profile({
//                         firstName: data.body.firstName,
//                         lastName: data.body.lastName,
//                         email: data.body.email,
//                     })
//                 )
//             })
//     }
// }

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

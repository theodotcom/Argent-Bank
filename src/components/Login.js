// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'

// import { signin } from '../api/api'

// const Login = () => {
//     const store = useSelector((state) => state)

//     const navigate = useNavigate()
//     const dispatch = useDispatch()

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const checkDetails = (e) => {
//         e.preventDefault()
//         dispatch(signin(email, password))
//     }

//     useEffect(() => {
//         if (store.currentState === 'logged') {
//             navigate('/user')
//         }
//     })

//     return (
//         <div>
//             <title>Argent Bank - Sign In</title>

//             <main className="main bg-dark">
//                 <section className="sign-in-content">
//                     <i className="fa fa-user-circle sign-in-icon"></i>
//                     <h1>Sign In</h1>

//                     <form onSubmit={(e) => checkDetails(e)}>
//                         <div className="input-wrapper">
//                             <label htmlFor="username">Username</label>
//                             <input
//                                 type="text"
//                                 id="username"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>
//                         <div className="input-wrapper">
//                             <label htmlFor="password">Password</label>
//                             <input
//                                 type="password"
//                                 id="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>

//                         <button className="sign-in-button">Sign In</button>
//                     </form>
//                 </section>
//             </main>
//         </div>
//     )
// }

// export default Login

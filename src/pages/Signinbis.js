import '../css/main.css'

import React, { useEffect, useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { signin } from '../api/api'
import { getProfileInfos } from '../api/api'
import { useDispatch, useSelector } from 'react-redux'
// import store from '../redux/store'
import { useStore } from 'react-redux'
import { token, profile } from '../redux/reducer/reducer'

import { usersReducer } from '../redux/reducer/reducer'

const Signinbis = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const store = useStore()
    const state = useSelector((state) => state)

    const checkDetails = async (e) => {
        e.preventDefault()

        const data = await signin(email, password)
        store.dispatch(token({ token: data }))
        const dataUser = await getProfileInfos(data)
        store.dispatch(
            profile({
                firstName: dataUser.firstName,
                lastName: dataUser.lastName,
                email: dataUser.email,
            })
        )
    }

    return (
        <div>
            <title>Argent Bank - Sign In</title>

            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>

                    <form onSubmit={(e) => checkDetails(e)}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button className="sign-in-button">Sign In</button>
                        {console.log(state)}
                    </form>
                </section>
            </main>
        </div>
    )
}

export default Signinbis

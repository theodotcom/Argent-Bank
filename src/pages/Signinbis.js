import '../css/main.css'

import React, { useEffect, useState } from 'react'

import { signin } from '../api/api'
import {useDispatch, useSelector} from "react-redux";
import store from '../redux/store'

import {usersReducer} from '../redux/reducer/reducer'

const Signinbis = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {token} = usersReducer.actions
    const state = useSelector((state) => state)

    const checkDetails = async (e) => {
        e.preventDefault()
        const data = await signin(email, password)
        store.dispatch(token({token: data}))
    }

    // useEffect(() => {
    //     if (store.currentState === 'logged') {
    //         navigate('/user')
    //     }
    // })

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

                        {state.token}
                    </form>
                </section>
            </main>
        </div>
    )
}

export default Signinbis

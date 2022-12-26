import '../css/main.css'
import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { signin } from '../api/api'
import { getProfileInfos } from '../api/api'
import { useSelector } from 'react-redux'
import { useStore } from 'react-redux'
import { token, profile } from '../redux/reducer/reducer'
import logo from '../img/argentBankLogo.png'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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

    if (state.loggedIn) {
        return <Navigate to={'/user'} />
    }

    return (
        <div>
            <title>Argent Bank - Sign In</title>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="main-nav-item" to="/signin">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            </nav>
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
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label for="remember-me">Remember me</label>
                        </div>

                        <button className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
            <footer className="footer">
                <p className="footer-text">Copyright 2020 Argent Bank</p>
            </footer>
        </div>
    )
}

export default Signin

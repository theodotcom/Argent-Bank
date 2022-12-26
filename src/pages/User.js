import { Link } from 'react-router-dom'
import '../css/main.css'
import logo from '../img/argentBankLogo.png'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { modifyProfile } from '../api/api'
import { modify } from '../redux/reducer/reducer'

const User = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [editingName, setEditingName] = useState(false)
    const token = state.token

    useEffect(() => {
        setFirstName(state.firstName)
        setLastName(state.lastName)
    }, [state.firstName, state.lastName])

    const editProfile = async (e) => {
        e.preventDefault()
        try {
            await modifyProfile(token, firstName, lastName);
            dispatch(
                modify({
                    firstName,
                    lastName,
                })
            )
        } catch (e){
            console.error(e)
        }
        setEditingName(false)
    }

    if (!state.loggedIn) {
        return <Navigate to={'/signin'} />
    }

    return (
        <div className="body_container">
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
                    <Link className="main-nav-item" to="/user">
                        <i className="fa fa-user-circle"></i>
                        {state.firstName}&nbsp;
                        {state.lastName}
                    </Link>
                    <Link className="main-nav-item" to="/">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>
            </nav>
            <main className="main bg-dark">
                <div className="header">
                    {editingName ? (
                        <form onSubmit={editProfile}>
                            <label htmlFor="firstName" id="editLastName">
                                First Name:
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            />
                            <label htmlFor="lastName" id="editLastName">
                                Last Name:
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                            />
                            <button type="submit">
                                Save
                            </button>
                            <button onClick={() => setEditingName(false)}>
                                Cancel
                            </button>
                        </form>
                    ) : (
                        <>
                            <h1>
                                {state.firstName}
                                <br />
                                {state.lastName}
                            </h1>
                            <button
                                className="edit-button"
                                onClick={() => setEditingName(true)}
                            >
                                Edit Name
                            </button>
                        </>
                    )}
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">
                            Argent Bank Checking (x8349)
                        </h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">
                            Available Balance
                        </p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">
                            View transactions
                        </button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">
                            Argent Bank Savings (x6712)
                        </h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">
                            Available Balance
                        </p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">
                            View transactions
                        </button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">
                            Argent Bank Credit Card (x8349)
                        </h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">
                            Current Balance
                        </p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">
                            View transactions
                        </button>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <p className="footer-text">Copyright 2020 Argent Bank</p>
            </footer>
        </div>
    )
}

export default User

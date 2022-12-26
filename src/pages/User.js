import { Link } from 'react-router-dom'
import '../css/main.css'
import logo from '../img/argentBankLogo.png'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useState, dispatch } from 'react'
import { modifyProfile } from '../api/api'
import { modify } from '../redux/reducer/reducer'

const User = () => {
    const state = useSelector((state) => state)
    const firstName = state.firstName
    const lastName = state.lastName
    const token = state.token
    const [editingName, setEditingName] = useState(false)
    const editProfile = (e) => {
        e.preventDefault()
        const editFirstName = document.querySelector('#editFirstName').value
        const editLastName = document.querySelector('#editLastName').value
        modifyProfile(token, editFirstName, editLastName)
        dispatch(
            modify({
                firstName: editFirstName,
                lastName: editLastName,
            })
        )

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
                        {firstName}&nbsp;
                        {lastName}
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
                        <form>
                            <label htmlFor="firstName" id="editLastName">
                                First Name:
                            </label>
                            <input type="text" id="firstName" />
                            <label htmlFor="lastName" id="editLastName">
                                Last Name:
                            </label>
                            <input type="text" id="lastName" />
                            <button type="submit" onClick={() => editProfile}>
                                Save
                            </button>
                            <button onClick={() => setEditingName(false)}>
                                Cancel
                            </button>
                        </form>
                    ) : (
                        <>
                            <h1>
                                {firstName}
                                <br />
                                {lastName}
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

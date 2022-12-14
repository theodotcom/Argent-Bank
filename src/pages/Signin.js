import { Link } from 'react-router-dom'
import '../css/main.css'
import logo from '../img/argentBankLogo.png'

const Signin = () => {
    const profile = (token) => {
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

    const signin = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'steve@rogers.com',
                password: 'password456',
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                profile(data.body.token)
            })
    }

    return (
        <div className="body_container">
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/index">
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
                    <form onSubmit={(e) => signin(e)}>
                        <div className="input-wrapper">
                            <label for="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label for="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label for="remember-me">Remember me</label>
                        </div>

                        <Link href="/user" className="sign-in-button">
                            Sign In
                        </Link>

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

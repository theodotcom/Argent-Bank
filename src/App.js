import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Signin from './pages/Signin'
import User from './pages/User'
import Signinbis from './pages/Signinbis'
import Profil from './components/Profil'
import Profilbis from './pages/Userbis'
// import Login from './components/Login'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Index />}></Route>
                    <Route exact path="/signin" element={<Signin />}></Route>
                    <Route
                        exact
                        path="/signinb"
                        element={<Signinbis />}
                    ></Route>

                    {/* <Route exact path="/login" element={<Login />}></Route> */}
                    <Route exact path="/userbis" element={<Profil />}></Route>
                    <Route exact path="/user" element={<User />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import User from './pages/User'
import Signin from './pages/Signin'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Index />}></Route>
                    <Route exact path="/signin" element={<Signin />}></Route>
                    <Route exact path="/user" element={<User />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App

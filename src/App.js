import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index';
import Signin from './pages/Signin';
import User from './pages/User';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/index" element={<Index />}></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
          <Route exact path="/user" element={<User />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

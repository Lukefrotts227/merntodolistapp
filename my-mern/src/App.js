import logo from './logo.svg';
import './App.css';
import SignUp from './pages/signuppage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="title">
        <Routes>
        <Route exact path = '/' element={<SignUp/>}></Route>
        </Routes>
      </div>

    </Router>

  );
}

export default App;

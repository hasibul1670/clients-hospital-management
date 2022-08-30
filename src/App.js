import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/HomePage/Home';
import About from './Components/Pages/About';
import Login from './Components/LoginPage/login';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login/>} />
      
      </Routes>
     
    </div>
  );
}

export default App;

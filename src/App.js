
import './App.css';
import Navbar from './Components/Shared/Navbar';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/HomePage/Home';
import About from './Components/Pages/About';
import Login from './Components/LoginPage/login';
import Appointment from "./Components/Appointment/Appointment";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login/>} />
        <Route path="appointment" element={<Appointment/>} />
      
      </Routes>
     
    </div>
  );
}

export default App;

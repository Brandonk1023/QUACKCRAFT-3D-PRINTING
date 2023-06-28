import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import navbar from "./components/navbar/Navbar";
import about from "./components/about/About";
import login from "./components/login/Login";
import signup from "./components/signup/Signup";
import contact from "./components/contact/Contact";
import footer from "./components/footer/Footer";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

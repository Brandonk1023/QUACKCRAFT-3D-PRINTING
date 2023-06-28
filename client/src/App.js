import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import navbar from "./components/navbar/Navbar";
import login from "./components/login/Login";
import signup from "./components/signup/Signup";
import footer from "./components/footer/Footer";
import logout from "./components/logout/Logout";
import userProfile from "./components/UserProfile";
import sideBar from "./components/sideBar/SideBar";
import pageList from "./components/pageList/PageList"

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

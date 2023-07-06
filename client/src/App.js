import React from "react";
import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import navbar from "./components/navbar/Navbar";
// import footer from "./components/footer/Footer";
// import logout from "./components/logout/Logout";
// import userProfile from "./components/UserProfile";
// import sideBar from "./components/sideBar/SideBar";
// import pageList from "./components/pageList/PageList"

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formFirstname) => {
    setCurrentForm(formFirstname);
  }
  
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" Component={<home />}/>
        <Route path="/login" Component={<login />}/>
        <Route path="/logout" Component={logout />}/>
        <Route path="/profile" Component={<profile />}/>
        <Route path="/tutorials" Component={<tutorials />}/>
        <Route path="/filaments" Component={<filaments/>}/>
        <Route path="/downloadables" Component={<downloadables />}/>
        <Route path="/store" Component={<store />}/>
      </Routes>
      {
        currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
     {/* <Login /> */}
    </div>
    </Router>
  );
}

export default App;






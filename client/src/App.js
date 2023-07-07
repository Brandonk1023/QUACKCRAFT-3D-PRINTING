
import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import { Login } from './components/login/login'
import { Register } from './components/register/Register'
import { AccountSettings } from './components/userProfile/AccountSettings'
import React from "react";
import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AccountSettings } from "./components/userProfile/AccountSettings";
// imports for userProfile
import SimpleBar from 'simplebar-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './components/userProfile/helpers/index'
import Cover from './components/userProfile/Cover'
import Main from './components/userProfile/Main'


function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = formName => {
    setCurrentForm(formName)
  }

  return (
    <Router>
    <div className="App">

        currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      } */}
      {/* <Login /> */}

    <SimpleBar style={{ maxHeight: '100vh' }}>
      <ChakraProvider theme={theme}>
        <Router>
          <Navbar>
            <Routes>
              <Route exact path="/" Component={<home />}/>
              <Route path="/login" Component={<login />}/>
              <Route path="/logout" Component={<logout />}/>
              <Route path="/profile" Component={<profile />}/>
              <Route path="/tutorials" Component={<tutorials />}/>
              <Route path="/filaments" Component={<filaments/>}/>
              <Route path="/downloadables" Component={<downloadables />}/>
              <Route path="/store" Component={<store />}/>
              <Route path="/register"/>
              <Route path="/cover"/>
              <Route path="/main"/>
            </Routes>
          </Navbar>
       </Router>
      </ChakraProvider>
    </SimpleBar>
    </div>

export default App

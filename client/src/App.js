
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
            <Navbar />
            <Switch>
              <Route path="/">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/cover"></Route>
              <Route path="/main">
                <Cover />
                <Main />
              </Route>
            </Switch>
          </Router>
        </ChakraProvider>
      </SimpleBar>
    </div>

  )

}

export default App

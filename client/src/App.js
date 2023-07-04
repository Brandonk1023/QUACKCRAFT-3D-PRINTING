
import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { AccountSettings } from "./components/userProfile/AccountSettings";
// imports for userProfile
import SimpleBar from 'simplebar-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './components/userProfile/helpers/index'
import Cover from './components/userProfile/Cover'
import Main from './components/userProfile/Main'




// import navbar from "./components/navbar/Navbar";
// import footer from "./components/footer/Footer";
// import logout from "./components/logout/Logout";
// import sideBar from "./components/sideBar/SideBar";
// import pageList from "./components/pageList/PageList"

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formFirstname) => {
    setCurrentForm(formFirstname);
  }

  return (
    <div className="App">
      {/* {
        currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      } */}
      {/* <Login /> */}

      <SimpleBar style={{ maxHeight: '100vh' }}>
        <ChakraProvider theme={theme}>
          <Router>
            <Navbar />
            <Switch>
              <Route path= "/login">
                <Login />
              </Route>
              <Route path= "/register">
                <Register />
              </Route>
              <Route path= "/cover">
              </Route>
              <Route path= "/">
                <Cover />
                <Main />
              </Route>
            </Switch>
          </Router>
        </ChakraProvider>
      </SimpleBar>

    </div>
  );
}

// added this for userProfile page... not sure if we need this OR even if this is right :/ delete if needed 
// function userProfile() {

//   return (
//     <SimpleBar style={{ maxHeight: '100vh' }}>
//       <ChakraProvider theme={theme}>
//         <Router>
//           <Switch>
//             <Route path="/" exact>
//               <Cover />
//               <Main />
//             </Route>
//           </Switch>
//         </Router>
//       </ChakraProvider>
//     </SimpleBar>
//   )
// }
// code ends

{/* <SimpleBar style={{ maxHeight: '100vh' }}>
<ChakraProvider theme={theme}>
  <Router>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/" component={Register}/>
      <Route exact path="/" component={Cover}/>
      <Route exact path="/" component={Main}/>
      </Route>
    </Switch>
  </Router>
</ChakraProvider>
</SimpleBar> */}

export default App;






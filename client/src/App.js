import React, { useState } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import logo from './logo.svg';
import './App.css'
import Navbar from './components/navbar/navbar'
import login from './components/login/login'
import DonationForm from './components/donation/donationForm'
// import HelpUs from './components/donation'
// import HelpUsTitle from '/components/donation/HelpUs/HelpUsTitle'
import { Register } from './components/register/Register'
// imports for userProfile
// import { AccountSettings } from "./components/userProfile/AccountSettings";
import SimpleBar from 'simplebar-react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './components/userProfile/helpers/index'
import Cover from './components/userProfile/Cover';
import  UserProfile   from './components/userProfile';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import Login from './components/login/login';
import Downloadables from './components/downloadables/downloadables';
import Tutorials from './components/Tutorials/Tutorials';
// RAIYA and ETHAN -- need to review where the above imports for logo, AccountSetting, Cover, Main are be used

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
})

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  const [currentForm, setCurrentForm] = useState('login')
  // RAIYA and ETHAN -- need to review where `currentForm` is used
/*   const toggleForm = formName => {
    setCurrentForm(formName)
  }
 */
  return (
    <ApolloProvider client={client}>

      <div className="App">
{/*         {currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> : ' '} */}
{/*         <Register onFormSwitch={toggleForm} /> */}
        <SimpleBar style={{ maxHeight: '100vh' }}>
          <ChakraProvider theme={theme}>
            <Router>
              <Navbar/>
                <Routes>
                  <Route exact path="/" element={<Login />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/about" element={<AboutUs />} />
                  {/* <Route path="/login" element={<login />} /> */}
                  <Route path="/userProfile" element={<UserProfile />} />
                  <Route path="/logout" element={<logout />} />
                  <Route path="/tutorials" element={<Tutorials />} />
                  <Route path="/filaments" element={<filaments />} />
                  <Route path="/downloadables" element={<Downloadables />} />
                  <Route path="/donate" element={<DonationForm />} />
                  <Route path="/register" />
                </Routes>
            </Router>
          </ChakraProvider>
        </SimpleBar>
      </div>
    </ApolloProvider>
  )
}

export default App

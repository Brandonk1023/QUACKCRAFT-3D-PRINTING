import React, { useState } from 'react'

export const Logout = props => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  // start code: not sure if I need this
  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const PasswordChange = e => {
    setPass(e.target.value)
  }
  // end code

  const handleSubmit = e => {
    e.preventDefault()
    console.log(email)
    // not sure if this correct: login logic for making API call
    // const loginData = {
    //     email: email,
    //     pass: pass
    // };
    // makeLoginAPIRequest(loginData);

    // Reset form fields after successful login
    setEmail('')
    setPass('')
  }

  return (
    // <>Logout </>
    <div className="auth-form-container">
      <h2 className="header-text">We look forward to seeing you again!</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input
          className="input-box"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="enter your email"
          id="email"
          name="email"
        />
        <label for="password">Password</label>
        <input
          className="input-box"
          value={pass}
          onChange={e => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button className="hover">Log in!</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch('Register')}
      >
        Need an account? Register here!
      </button>
    </div>
  )
}

export default Logout

import React, { useState } from 'react'

export const Register = props => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confirmpass, setConfirmPass] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [username, setUserName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    // if (validateForm()) {
    //     submitForm();
    // }
    console.log(email)
  }

  return (
    // <>Register </>
    <div className="auth-form-container">
      <h2 className="header-text">We've been expecting you!</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlfor="firstname">First Name</label>
        <input
          className="input-box"
          value={firstname}
          onChange={e => setFirstName(e.target.value)}
          name="firstname"
          id="firstname"
          placeholder="ex. Daffy"
        />
        <label htmlfor="lastname">Last Name</label>
        <input
          className="input-box"
          value={lastname}
          onChange={e => setLastName(e.target.value)}
          name="lastname"
          id="lastname"
          placeholder="ex. Duck"
        />
        <label htmlfor="username">Username</label>
        <input
          type="text"
          className="input-box"
          value={username}
          onChange={e => setUserName(e.target.value)}
          name="username"
          id="username"
          placeholder="ex. Zer0ducksgiven"
        />
        <label htmlfor="email">Email</label>
        <input
          className="input-box"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="yourname@example.com"
          id="email"
          name="email"
        />
        <label htmlfor="password">Password</label>
        <input
          className="input-box"
          value={pass}
          onChange={e => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <label htmlfor="confirmpassword">Confirm Password</label>
        <input
          className="input-box"
          value={confirmpass}
          onChange={e => setConfirmPass(e.target.value)}
          type="password"
          placeholder="********"
          id="confirmpassword"
          name="confirmpassword"
        />
        <button className="hover">Register!</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>
        Already have an account? Login here!
      </button>
    </div>
  )
}

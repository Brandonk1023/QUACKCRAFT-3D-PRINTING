import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [username, setUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        // <>Register </>
        <div className="auth-form-container">
            <h2>We've been expecting you!</h2>
        <form className="register-form"onSubmit={handleSubmit}>
            <label htmlfor="firstname">First Name</label>
            <input value={firstname} name="firstname" id="firstname" placeholder="ex. Daffy" />
            <label htmlfor="lastname">Last Name</label>
            <input value={lastname} name="lastname" id="lastname" placeholder="ex. Duck" />
            <label htmlfor="username">Username</label>
            <input value={username} name="username" id="username" placeholder="ex. Zer0ducksgiven!" />
            <label htmlfor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="yourname@example.com" id="email" name="email" />
            <label htmlfor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button className="hover">Register!</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Already have an account? Login here!</button>
        </div>
    )
}
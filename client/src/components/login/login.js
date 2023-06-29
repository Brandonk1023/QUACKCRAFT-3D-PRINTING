import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        // <>Login </>
        <div className="auth-form-container">
            <h2>Welcome Back! </h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label for="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="enter your email" id="email" name="email" />
            <label for="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button className="hover">Log in!</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('Register')}>Need an account? Register here!</button>
        </div>
    )
}
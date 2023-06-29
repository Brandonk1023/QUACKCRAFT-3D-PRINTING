import React, { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        // <>Login </>
        <form>
            <label for="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="your email here" id="email" name="email" />
            <label for="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button>Log in</button>
        </form>
    )
}
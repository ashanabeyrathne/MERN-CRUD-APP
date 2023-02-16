import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {


    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newLogUser = {
            email,
            password
        }


        // Validate form data

        if (!email) {
            setEmailError('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Password is required');
        } else if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
        } else {
            setPasswordError('');
        }


        // If form data is valid, submit form
        if (!emailError && !passwordError) {
            axios.post("http://localhost:5000/loginusers", newLogUser)
                .then((response) => {
                    // Handle successful response
                    console.log(response);
                })
                .catch((error) => {
                    // Handle error
                    console.log(error);
                });
        }
    };

    return (

        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"  className="form-control"
                           value={email}
                           onChange={(event) => setEmail(event.target.value)} />
                    {emailError && <span>{emailError}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                    {passwordError && <span>{passwordError}</span>}
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;


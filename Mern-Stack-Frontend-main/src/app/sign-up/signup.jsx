import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [contact, setContact] = useState("");
    const [contactError, setContactError] = useState("");

    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [passwordConfirmationError, setPasswordConfirmationError] = useState('');




    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            name,
            email,
            contact,
            address,
            password,
            passwordConfirmation
        }



        // Validate form data
        if (!name) {
            setNameError('Name is required')
        }
        if (!email) {
            setEmailError('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }

        if (!contact) {
            setContactError('Contact is required')
        }else if (contact.length <= 10){
            setContactError('Invalid Contact Number')
        }

        if (!address){
            setAddressError('Address is required')
        }

        if (!password) {
            setPasswordError('Password is required');
        } else if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
        } else {
            setPasswordError('');
        }

        if (!passwordConfirmation) {
            setPasswordConfirmationError('Password confirmation is required');
        } else if (password !== passwordConfirmation) {
            setPasswordConfirmationError('Passwords do not match');
        } else {
            setPasswordConfirmationError('');
        }

        // If form data is valid, submit form
        if (!emailError && !passwordError && !passwordConfirmationError) {
            axios.post("http://localhost:5000/signupusers", newUser)
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
                <h1>Register</h1>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="name"  className="form-control"
                           value={name}
                           onChange={(event) => setName(event.target.value)} />
                    {nameError && <span>{nameError}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"  className="form-control"
                           value={email}
                           onChange={(event) => setEmail(event.target.value)} />
                    {emailError && <span>{emailError}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Contact</label>
                    <input type="contact"  className="form-control"
                           value={contact}
                           onChange={(event) => setContact(event.target.value)} />
                    {contactError && <span>{contactError}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                    <input type="address"  className="form-control"
                           value={address}
                           onChange={(event) => setAddress(event.target.value)} />
                    {addressError && <span>{addressError}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                    {passwordError && <span>{passwordError}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control"  value={passwordConfirmation} onChange={(event) => setPasswordConfirmation(event.target.value)} />
                    {passwordConfirmationError && <span>{passwordConfirmationError}</span>}

                </div>


                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    );
}

export default SignupForm;

import React, { useState } from "react";
import useForm from "../../components/useForm";
import validate from '../../components/loginFormValidation'
import { Navigate, Link } from "react-router-dom";

const Login = props => {
    const { values, errors, handleChange, handleSubmit } = useForm(
        login,
        validate
    );
    const [setLoggedIn] = useState(false);

    function login() {
        setLoggedIn(true);
        props.parentCallback(true);
        return <Navigate to="/default" />;
    }

    return (
        <div className="section is-fullheight">
            <div className="container">
                <div className="column is-6 is-offset-3">
                    <div className="box">
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="field">
                                <label className="label">Email Address</label>
                                <div className="control">
                                    <input
                                        autoComplete="off"
                                        className={`input ${errors.email && "is-danger"}`}
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        value={values.email || ""}
                                        required
                                    />
                                    {errors.email && (
                                        <p className="help is-danger">{errors.email}</p>
                                    )}
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input
                                        className={`input ${errors.password && "is-danger"}`}
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        value={values.password || ""}
                                        required
                                    />
                                </div>
                                {errors.password && (
                                    <p className="help is-danger">{errors.password}</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="button is-block is-info is-fullwidth"
                            >
                                Login
                            </button>
                            <br/>
                            <label className="label">If you don't have an account?</label>
                            <Link to="/signup"> <button
                                type="submit"
                                className="button is-block is-info is-fullwidth"
                            >
                                Signup
                            </button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

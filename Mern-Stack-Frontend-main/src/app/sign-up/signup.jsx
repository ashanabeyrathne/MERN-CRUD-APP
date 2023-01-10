import React, { useState } from "react";


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");




    return (
        <div className="section is-fullheight">
            <div className="container">
                <div className="column is-6 is-offset-3">
                    <div className="box">
                        <h1>Signup</h1>
                        <form onSubmit={handleSubmit} noValidate>

                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input
                                        autoComplete="off"
                                        className={`input ${errors.name && "is-danger"}`}
                                        type="name"
                                        name="name"
                                        onChange={handleChange}
                                        value={values.name || ""}
                                        required
                                    />
                                    {errors.name && (
                                        <p className="help is-danger">{errors.name}</p>
                                    )}
                                </div>
                            </div>

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
                                <label className="label">Contact No</label>
                                <div className="control">
                                    <input
                                        autoComplete="off"
                                        className={`input ${errors.contact && "is-danger"}`}
                                        type="contact"
                                        name="contact"
                                        onChange={handleChange}
                                        value={values.contact || ""}
                                        required
                                    />
                                    {errors.contact && (
                                        <p className="help is-danger">{errors.contact}</p>
                                    )}
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Address</label>
                                <div className="control">
                                    <input
                                        autoComplete="off"
                                        className={`input ${errors.address && "is-danger"}`}
                                        type="address"
                                        name="address"
                                        onChange={handleChange}
                                        value={values.address || ""}
                                        required
                                    />
                                    {errors.address && (
                                        <p className="help is-danger">{errors.address}</p>
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

                            <div className="field">
                                <label className="label">Confirm Password</label>
                                <div className="control">
                                    <input
                                        className={`input ${errors.confirmPassword && "is-danger"}`}
                                        type="confirmPassword"
                                        name="confirmPassword"
                                        onChange={handleChange}
                                        value={values.confirmPassword || ""}
                                        required
                                    />
                                </div>
                                {errors.confirmPassword && (
                                    <p className="help is-danger">{errors.confirmPassword}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="button is-block is-info is-fullwidth"
                            >
                                Signup
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
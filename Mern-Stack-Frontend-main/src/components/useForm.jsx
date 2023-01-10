import { useState, useEffect } from "react";
import axios from "axios";

const useForm = (callback, validate) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");


    const saveUser = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:5000/users", {
                name,
                email,
                contact,
                address,
                password,
                confirmpassword,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };




    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    const handleSubmit = event => {
        if (event) event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);

    };

    const handleChange = event => {
        event.persist();
        setName(event.target.value)
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }));
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    };
};

export default useForm;
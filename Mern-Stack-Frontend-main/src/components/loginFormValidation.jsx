export default function validate(values) {
    let errors = {};

    if (!values.name){
        errors.name = "Name is required"
    }

    if (!values.email) {
        errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    if (!values.contact){
        errors.contact = "Contact is required"
    } else if (values.contact.length > 10) {
        errors.contact = "Mobile Number must be 10 numbers";
    }
    if (!values.address){
        errors.address = "Address is required"
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 8) {
        errors.password = "Password must be 8 or more characters";
    } else if (!/\d/.test(values.password)) {
        errors.password = "Password must contain atleast 1 number";
    } else if (!/[!@#$%&?]/g.test(values.password)) {
        errors.password = "Password must contain atleast 1 special character";
    } else if (!/[A-Z]/g.test(values.password)) {
        errors.password = "Password must contain atleast 1 capital letter";
    } else if (values.password !== values.confirmPassword){
        errors.confirmPassword = "Password not same"
    }

    return errors;
}

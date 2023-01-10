import mongoose from "mongoose";

const logUser = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    confirmPassword:{
        type: String,
        required: true,
    }
});

export default mongoose.model('LogUsers', logUser);
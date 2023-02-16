import logUser from "../models/SignUpModel.js";

export const getLogUser = async (req, res) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;


    logUser.findOne({email: req.body.email} && {password:req.body.password}, (err,data) => {
        if (err) throw err;
        if (!data) {
            res.status(401).send('Invalid email or password');
        }else if (data.email !== userEmail){
            res.status(401).send('Invalid email');
        }else if (data.password !== userPassword){
            res.status(401).send('Invalid password');
        }else{
            res.send('success login!');
        }
    } )
}


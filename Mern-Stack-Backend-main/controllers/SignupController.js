import logUser from "../models/SignUpModel.js";


export const saveLogUser = async (req, res) => {
    const loggeduser = new logUser(req.body);
    //check if this user already exisits
    let user = await logUser.findOne({email: req.body.email});
    if (user) {
        return res.status(400).send('User Already Exisits!')
    }else {
        try {
            const insertedloguser = await loggeduser.save();
            res.status(201).json(insertedloguser);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

}



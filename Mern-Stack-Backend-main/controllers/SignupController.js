import logUser from "../models/SignUpModel.js";


export const saveLogUser = async (req, res) => {
    const loggeduser = new logUser(req.body);
    try {
        const insertedloguser = await loggeduser.save();
        res.status(201).json(insertedloguser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}



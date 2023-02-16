import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import SignupRoute from "./routes/SignupRoute.js"
import LoginRoute from "./routes/LoginRoute.js";

const app = express();
mongoose.connect('mongodb+srv://weblankandb:LH4BYvQtaY2tyo9A@weblankandb.qql55ct.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(SignupRoute);
app.use(LoginRoute)

app.listen(5000, ()=> console.log('Server up and running...'));
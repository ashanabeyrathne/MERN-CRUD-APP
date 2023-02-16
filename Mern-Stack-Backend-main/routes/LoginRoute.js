import express from "express";
import { getLogUser} from "../controllers/LoginController.js";

const router = express.Router();

router.post('/loginusers', getLogUser);

router.get('/loginusers', function (req, res, next) {
    return res.render('login');
});


export default router;
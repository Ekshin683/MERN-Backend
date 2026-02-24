import {addUser, deleteUser, showUser, login} from '../controllers/usercontroller.js';
import express from 'express';
const userRoute = express.Router();
userRoute.get("/showUsers",showUser);
userRoute.post("/addUser",addUser);
userRoute.delete("/deleteUser/:id",deleteUser);
userRoute.post("/login", login);
export default userRoute;
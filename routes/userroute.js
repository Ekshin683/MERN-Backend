import {addUser, deleteUser, showUser} from '../controllers/usercontroller.js';
import express from 'express';
const userRoute = express.Router();
userRoute.get("/showUsers",showUser);
userRoute.post("/addUser",addUser);
userRoute.delete("/deleteUser/:id",deleteUser);
export default userRoute;
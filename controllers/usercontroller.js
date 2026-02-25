import userModel from '../config/usermodel.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const SECRET = "hello"
export const addUser = async (req,res) => {
    const body = req.body;
    const hashPassword = await bcrypt.hash(body.password,10);
    const password = hashPassword;
    const result = await userModel.create({...body, password});
    res.json(result);
};
export const showUser = async (req,res) => {
    const result = await userModel.find();
    res.json(result);
};
export const deleteUser = async (req,res) => {
    const result = await userModel.findByIdAndDelete(req.params.id);
    res.json(result);
}
export const login = async (req,res) =>{
    const {email,password} = req.body;
    const found = await userModel.findOne({email:email})
    if(found){
        const checkpassword = await bcrypt.compare(password,found.password);
        if(checkpassword){
            const token = jwt.sign({id:found._id, role: found.role}, SECRET, {expiresIn:"1h"});
            res.status(200).json({message:"Login Successfull", token:token});
        }else{
            res.status(401).json({message:"Invalid Password"});
        }
    }else{
        res.status(404).json({message:"User Not Found"});
    }
}
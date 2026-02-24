import userModel from '../config/usermodel.js';
export const addUser = async (req,res) => {
    const result = await userModel.create(req.body);
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
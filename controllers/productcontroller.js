import productModel from "../models/productmodel.js";

export const addProduct = async(req,res) => {
    const body = req.body;
    const result = await productModel.create(body);
    res.json(result);
}
export const showProduct = async(req,res) => {
    const result = await productModel.find();
    res.json(result);
}
export const deleteProduct = async(req,res) => {
    const result = await productModel.findByIdAndDelete(req.params.id);
    res.json(result);
}
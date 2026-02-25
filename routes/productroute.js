import {addProduct, showProduct,deleteProduct} from '../controllers/productcontroller.js';
import express from 'express';

const productRoute = express.Router();

productRoute.get("/showProducts", showProduct);
productRoute.delete("/deleteProduct/:id", deleteProduct);
productRoute.post("/addProduct", addProduct);

export default productRoute;

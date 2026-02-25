import express from 'express';
import dbConnect from './config/db.js';
import userRoute from './routes/userroute.js';
import cors from 'cors';
import productRoute from './routes/productroute.js';
const app = express();
const startServer = async () => {
    await dbConnect();
    app.listen(8080, () => {
    console.log("Server Started");
})
}
app.use(express.json());
// dbConnect();
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
startServer();
import express from 'express';
import dbConnect from './config/db';
import userRoute from './routes/userroute';
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
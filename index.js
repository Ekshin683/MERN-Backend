import express from 'express';
import dbConnect from './config/db.js';
import userRoute from './routes/userroute.js';
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
startServer();
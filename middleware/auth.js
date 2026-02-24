import jwt from 'jsonwebtoken';

const authenticate = (req,res,next) => {
    const authheader = req.headers.autherization;
    const token = authheader.split(" ")[1];

    const user = jwt.verify(token, SECRET)
}
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoute.js";
import postRouter from "./routes/postRoute.js";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
dotenv.config()

const app = express();
const port = 4000;
const allowedOrigins = ['http://localhost:5173'];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};
app.use(bodyParser.json());
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
connectDB();

console.log('SECRET:', process.env.SECRET);
app.use("/api/user", userRouter);
app.use("/api/job", postRouter);

app.get("/", (req, res) => {
    res.send("server is working");
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});

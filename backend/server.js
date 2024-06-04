// import express from "express"
// import cors from "cors";
// import { connectDB } from "./config/db.js"
// import bodyParser from "body-parser"
// import cookieParser from "cookie-parser";
// import userRouter from "./routes/userRoute.js"
// import postRouter from "./routes/postRoute.js";


// import 'dotenv/config'
// const app = express()
// const port = 4000
// const allowedOrigins = [
//     'http://localhost:5173'
// ]
// const corsOptions = {
//     origin: (origin, callback) => {
//         if (allowedOrigins.includes(origin) || !origin) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     credentials: true,
// };
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(cors(corsOptions))
// app.get("/", (req,res)=>{
//     res.send("server is working")
// })

// connectDB();


// app.use("/api/user", userRouter)
// app.use("/api/job",postRouter)
// app.listen(port,()=>{
//     console.log(`server is running on ${port}`)
// })

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoute.js";
import postRouter from "./routes/postRoute.js";
import 'dotenv/config';

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

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/user", userRouter);
app.use("/api/job", postRouter);

app.get("/", (req, res) => {
    res.send("server is working");
});

// Connect to database
connectDB();

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});

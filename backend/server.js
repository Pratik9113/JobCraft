import express from "express"
import { connectDB } from "./config/db.js"
import bodyParser from "body-parser"
import userRouter from "./routes/userRoute.js"
const app = express()
const port = 4000


app.use(bodyParser.json());
app.get("/", (req,res)=>{
    res.send("server is working")
})

connectDB();


app.use("/api/user", userRouter)
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
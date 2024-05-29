import express from "express"
import { SignUp } from "../controllers/userLogin.js"
const userRouter = express.Router()


userRouter.post("/register", SignUp)
export default userRouter;
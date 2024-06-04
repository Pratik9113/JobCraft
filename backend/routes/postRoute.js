import express from "express";
import { addPost } from "../controllers/postJobs.js";
import { jwtAuth } from "../middleware/jwtAuth.js";
const postRouter = express.Router();


postRouter.post("/postJob",jwtAuth,addPost)
export default postRouter;
import express from "express";
import { addPost,postList } from "../controllers/postJobs.js";
import { jwtAuth } from "../middleware/jwtAuth.js";
const postRouter = express.Router();

postRouter.get("/postList", jwtAuth, postList);
postRouter.post("/postJob",jwtAuth,addPost)
export default postRouter;
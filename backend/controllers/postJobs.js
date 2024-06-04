import addJob from "../models/addModel.js";
import mongoose from "mongoose";

const addPost = async(req,res) =>{
    const {name,professionName,description,experience,location,fees,timing} = req.body;
    const {userId} = req.user;

    try{
        const newPost = new addJob({
            userId,
            name,
            professionName,
            description,
            experience,
            location,
            fees,
            timing
        })

        const saved = await newPost.save()
        return res.status(200).json({success : true, message : "Add post successfully", data : saved})
    }
    catch(error){
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export {addPost}
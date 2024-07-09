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


const postList = async (req, res) => {
    const { userId } = req.user;

    try {
        const postListItems = await addJob.find({});

        if (!postListItems) {
            return res.status(404).json({ success: false, message: "No posts found" });
        }

        return res.json({ success: true, data: postListItems });
    } catch (error) {
        console.error("Error fetching post list:", error);
        return res.status(500).json({ success: false, message: "Error fetching post list" });
    }
}

export {addPost, postList}
import mongoose, { mongo } from "mongoose"


const jobSchema = new mongoose.Schema({
    userId : {type :String},
    name : {type:String, required:true},
    professionName : {type:String, required:true},
    description :{type:String, required:true},
    experience : {type:String, required:true}, 
    location : {type:String, required:true},
    fees : {type:String, required:true},
    timing : {type:String, required:true},
},{timestamps:true})

const addJob = mongoose.model("jobsPost", jobSchema)
export default addJob;
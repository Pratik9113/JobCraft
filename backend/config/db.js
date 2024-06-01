import mongoose from "mongoose";
export const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb+srv://pratikpatil9113:wD6pmsheSTIbm6Ur@cluster0.bvscx2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`db is connected`)
    } catch (error) {
        console.log(error)
    }
}
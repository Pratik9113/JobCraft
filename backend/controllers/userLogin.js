import userModel from "../models/userModels.js"

const SignUp = async (req,res) =>{
    const { name, password, email} = req.body 
    try {
        const newUser = new userModel({
            name,
            email,
            password
        })

        const user = await newUser.save()
        return res.status(200).json({
            success : true,
            message : 'user sign up successfully'
        })
    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export {SignUp};
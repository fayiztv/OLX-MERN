import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password :{
        type:String,
        required:true
    }
})
const UserModel = mongoose.model("User",UserSchema)
export default UserModel
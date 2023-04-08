import mongoose from 'mongoose'
function dbConnect(){
    mongoose.connect("mongodb://127.0.0.1/olx-clone").then(result=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log("Database error \n"+err)
    })
}
export default dbConnect
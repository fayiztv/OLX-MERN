import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import dbConnect from "./config/dbConnect.js"
import cookieParser from 'cookie-parser';
import userRouter from './routers/userRouter.js'
import path from 'path'

const app=express();
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.resolve()+"/public"))
app.use(
  cors({
    origin: [
      "http://localhost:3000", 
    ],
    credentials: true,
  })
);

dbConnect();

app.use('/',userRouter)

app.listen(5000, ()=>{
    console.log("server running on port 5000")
})
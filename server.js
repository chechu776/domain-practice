import express from "express"
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const dburl="mongodb://127.0.0.1:27017/ecommerce?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8"

mongoose.connect(dburl).then(()=>{
    console.log("db connected");
})
const db = mongoose.connection;
app.use(cors({}))

app.get("/users",async (req,res)=>{
    try{
        const data =await db.collection("users").find().toArray()
        res.json(data)
    }
    catch(err){
        console.log(err);
        
    }
})

app.listen(4000,()=>{
    console.log("server running at http://localhost:4000");
})



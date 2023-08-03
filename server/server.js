import express  from "express";
import mongoose from "mongoose";
import cors from 'cors';

const app = express()
const PORT = 4000;
app.use(cors);

await mongoose.connect('mongodb+srv://akash:godzilla123@cluster0.bnp8099.mongodb.net/?retryWrites=true&w=majority');
console.log("Mongo Connected Succesflly");

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.listen(PORT,()=>{
    console.log("Serer running at http://localhost:4000");
})
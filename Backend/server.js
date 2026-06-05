import express from "express";
const app =  express();
import mongoose from "mongoose";
import methodOverride from "method-override";
import path from "path";
import 'dotenv/config';
import aiResponse from "./utils/openai.js";
import thread from "./models/Thread.js";
const url = 'mongodb://127.0.0.1:27017/Project';


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));


async function Main(){
    await mongoose.connect(url);
    console.log("Connected to database");
}

Main();

app.get("/test", async()=>{
   let newThread = new thread({
    threadId: "123",
    title: "Cricket"
   });
   let data =  await aiResponse("Explain in short about cricket");
   newThread.messages = {role: "assistant", content: data};
   await newThread.save();
   console.log("done");
})







app.listen(8080, ()=>{
    console.log(`App is listening on port 8080`);
});

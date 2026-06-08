import express from "express";
const app =  express();
import mongoose from "mongoose";
import methodOverride from "method-override";
import path from "path";
import 'dotenv/config';
import aiResponse from "./utils/openai.js";
import thread from "./models/Thread.js";
import threadRoutes from "./routes/thread.js"
const url = 'mongodb://127.0.0.1:27017/Project';
import ExpressError from "./utils/ExpressError.js";


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
    threadId: "124",
    title: "Cancer"
   });
   let data =  await aiResponse("Explain in short about cancer");
   newThread.messages = {role: "assistant", content: data};
   await newThread.save();
   console.log("done");
});

app.use("/thread", threadRoutes);




app.get("/chat", async(req, res)=>{
//  let{threadId, message} = req.body;
 console.log("inif");
 let threadId = true;
let message = false;
 if(!threadId || !message){
    console.log("inif");
    throw new ExpressError(400, "Missing Required Fields.");
 }
});

// app.post("/chat", async(req, res)=>{
// //  let{threadId, message} = req.body;
//  if(!threadId || !message){
//     throw new ExpressError(400, "Missing Required Fields.")
//  }
// });

app.use((err, req, res, next)=>{
    console.log(err);
    console.log("hello");
    // res.send(err);
})
app.listen(8080, ()=>{
    console.log(`App is listening on port 8080`);
});


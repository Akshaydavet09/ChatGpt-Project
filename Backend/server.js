import express from "express";
const app = express();
import mongoose from "mongoose";
import methodOverride from "method-override";
import path from "path";
import 'dotenv/config';
import aiResponse from "./utils/openai.js";
import thread from "./models/Thread.js";
import threadRoutes from "./routes/thread.js"
const url = 'mongodb://127.0.0.1:27017/Project';
import ExpressError from "./utils/ExpressError.js";
import { title } from "process";


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));


async function Main() {
    await mongoose.connect(url);
    console.log("Connected to database");
}

Main();

app.get("/test", async () => {
    let newThread = new thread({
        threadId: "124",
        title: "Cancer"
    });
    let data = await aiResponse("Explain in short about cancer");
    newThread.messages = { role: "assistant", content: data };
    await newThread.save();
    console.log("done");
});

app.use("/thread", threadRoutes);




app.get("/chat", async (req, res) => {
    //  let{threadId, message} = req.body;
    // console.log("inif");
    // let threadId = true;
    // let message = false;
    // if (!threadId || !message) {
    //     console.log("inif");
    //     throw new ExpressError(400, "Missing Required Fields.");
    // }

    let ThreadId = "124";
    let Thread = await thread.findOne({ threadId: ThreadId });
    let message = "How to get a job in IT";
    try {
        let response = await aiResponse(message);
        let Message = { content: response, role: "assistant" };
        let done = await thread.findByIdAndUpdate(Thread._id, { $push: { messages: Message } });
    } catch (error) {
        throw new ExpressError(429, "Error From Gemini");
    }









});

app.post("/chat", async (req, res) => {
    let { threadId: ThreadId, message } = req.body;
    if (!ThreadId || !message) {
        throw new ExpressError(400, "Missing Required Fields.")
    }

    let Thread = await thread.findOne({ threadId: ThreadId });
    if (!Thread) {
        Thread = new thread({ threadId: ThreadId, title: message});
    }
    try {
        let response = await aiResponse(message);
        let Message = { content: response, role: "assistant" };
        console.log(Message);
        Thread.messages.push(Message);
        let me = await Thread.save();
        console.log(me);
    } catch (error) {
        // throw new ExpressError(429, "Error From Gemini");
        console.log(error)
    }


});

app.use((err, req, res, next) => {
    console.log(err);
    console.log("hello");
    // res.send(err);
})
app.listen(8080, () => {
    console.log(`App is listening on port 8080`);
});


import Router from "router";
import thread from "../models/Thread.js"
const router = Router();

router.get("/", async(req, res)=>{
  let data = await thread.find().sort({updatedAt: -1});
  res.send(data);
});

router.get("/:id", async(req, res)=>{
    let {id} = req.params;
    let individualThread = await thread.find({_id: id});
    res.send(individualThread);
});

router.delete("/:id", async()=>{
    let {id} = req.params;
    let thread = await thread.findByIdAndDelete(id);
    res.send(thread);
})
export default router;
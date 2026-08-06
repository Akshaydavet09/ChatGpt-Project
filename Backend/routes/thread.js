import Router from "router";
import thread from "../models/Thread.js"
const router = Router();

router.get("/", async (req, res) => {
    console.log("------");
    let data = await thread.find().sort({ updatedAt: -1 });
    res.json(data);
});

router.get("/:id", async (req, res) => {
    let { id } = req.params;
    let individualThread = await thread.find({ threadId: id });
    res.json(individualThread);
});

router.delete("/:id", async (req, res) => {
    let { id } = req.params;
    let response = await thread.findByIdAndDelete(id);
    console.log(response);
})
export default router;
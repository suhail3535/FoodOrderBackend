const express = require("express");
const { sagarModel } = require("../db/db");
const sagarRouter = express.Router();

// <--------------------Postrequest-------------------------->

sagarRouter.post("/add", async (req, res) => {
    const data = req.body;
    try {
        const user = new sagarModel(data)
        await user.save()
        res.status(200).send({ "msg": "user details added" })
    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }
})
// <--------------------getrequest-------------------------->

sagarRouter.get("/", async (req, res) => {
    try {
        const users = await sagarModel.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send({ msg: "error.msg " });
    }
});


// <--------------------updaterequest-------------------------->

sagarRouter.patch("/update/:userID", async (req, res) => {
    const { userID } = req.params;
    const data = req.body;
    try {
        await sagarModel.findByIdAndUpdate({ _id: userID }, data);
        res.status(200).send({ msg: "product details updated" });
    } catch (error) {
        res.status(400).send({ msg: error.msg });
    }
});

// <--------------------deleterequest-------------------------->


sagarRouter.delete("/delete/:userID", async (req, res) => {
    const { userID } = req.params;
    try {
        await sagarModel.findByIdAndDelete({ _id: userID });
        res.status(200).send({ msg: " product details deleted" });
    } catch (error) {
        res.status(400).send({ msg: error.msg });
    }
});





module.exports = {
    sagarRouter
}
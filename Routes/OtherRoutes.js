const express = require("express");
const { otherModel } = require("../db/db");
const otherRouter = express.Router();

// <--------------------Postrequest-------------------------->

otherRouter.post("/add", async (req, res) => {
    const data = req.body;
    try {
        const user = new otherModel(data)
        await user.save()
        res.status(200).send({ "msg": "user details added" })
    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }
})
// <--------------------getrequest-------------------------->

otherRouter.get("/", async (req, res) => {
    try {
        const users = await otherModel.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send({ msg: "error.msg " });
    }
});


// <--------------------updaterequest-------------------------->

otherRouter.patch("/update/:userID", async (req, res) => {
    const { userID } = req.params;
    const data = req.body;
    try {
        await otherModelModel.findByIdAndUpdate({ _id: userID }, data);
        res.status(200).send({ msg: "product details updated" });
    } catch (error) {
        res.status(400).send({ msg: error.msg });
    }
});

// <--------------------deleterequest-------------------------->


otherRouter.delete("/delete/:userID", async (req, res) => {
    const { userID } = req.params;
    try {
        await sagarModel.findByIdAndDelete({ _id: userID });
        res.status(200).send({ msg: " product details deleted" });
    } catch (error) {
        res.status(400).send({ msg: error.msg });
    }
});





module.exports = {
    otherRouter
}
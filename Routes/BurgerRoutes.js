const express = require("express");
const { burgerModel } = require("../db/db");
const burgerRouter = express.Router();

// <--------------------Postrequest-------------------------->

burgerRouter.post("/add", async (req, res) => {
    const data = req.body;
    try {
        const user = new burgerModel(data)
        await user.save()
        res.status(200).send({ "msg": "user details added" })
    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }
})
// <--------------------getrequest-------------------------->

burgerRouter.get("/", async (req, res) => {
    try {
        const users = await burgerModel.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send({ msg: "error.msg " });
    }
});


// <--------------------updaterequest-------------------------->

burgerRouter.patch("/update/:userID", async (req, res) => {
    const { userID } = req.params;
    const data = req.body;
    try {
        await burgerModel.findByIdAndUpdate({ _id: userID }, data);
        res.status(200).send({ msg: "product details updated" });
    } catch (error) {
        res.status(400).send({ msg: error.msg });
    }
});

// <--------------------deleterequest-------------------------->


burgerRouter.delete("/delete/:userID", async (req, res) => {
    const { userID } = req.params;
    try {
        await burgerModel.findByIdAndDelete({ _id: userID });
        res.status(200).send({ msg: " product details deleted" });
    } catch (error) {
        res.status(400).send({ msg: error.msg });
    }
});





module.exports = {
    burgerRouter
}
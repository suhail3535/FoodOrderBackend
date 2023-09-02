const express = require("express");
const { pizzaModel } = require("../db/db");
const pizzaRouter = express.Router();

// <--------------------Postrequest-------------------------->

pizzaRouter.post("/add", async (req, res) => {
    const data = req.body;
    try {
        const user = new pizzaModel(data)
        await user.save()
        res.status(200).send({ "msg": "user details added" })
    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }
})
// <--------------------getrequest-------------------------->

pizzaRouter.get("/", async (req, res) => {
    try {
        const users = await pizzaModel.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send({ msg: "error.msg " });
    }
});


// <--------------------updaterequest-------------------------->

pizzaRouter.patch("/update/:userID", async (req, res) => {
    const { userID } = req.params;
    const data = req.body;
    try {
        await pizzaModel.findByIdAndUpdate({ _id: userID }, data);
        res.status(200).send({ msg: "product details updated" });
    } catch (error) {
        res.status(400).send({ msg: error.msg });
    }
});

// <--------------------deleterequest-------------------------->


pizzaRouter.delete("/delete/:userID", async (req, res) => {
    const { userID } = req.params;
    try {
        await pizzaModel.findByIdAndDelete({ _id: userID });
        res.status(200).send({ msg: " product details deleted" });
    } catch (error) {
        res.status(400).send({ msg: error.msg });
    }
});





module.exports = {

    pizzaRouter,
}
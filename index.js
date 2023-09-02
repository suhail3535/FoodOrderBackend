const express = require("express");
const { connection } = require("mongoose");
const { sagarRouter } = require("./Routes/SagarRoutes.js");
const app = express();
app.use(express.json())
const cors = require('cors');
const { pizzaRouter } = require("./Routes/PizzaRoutes.js");
const { otherRouter } = require("./Routes/OtherRoutes.js");
const { burgerRouter } = require("./Routes/BurgerRoutes.js");
app.use(cors())

app.get("/", (req, res) => {
    res.send("welcome to homepage")
})


app.use("/sagar", sagarRouter)
app.use("/pizza", pizzaRouter)
app.use("/other", otherRouter)
app.use("/burger", burgerRouter)









app.listen(8080, async () => {
    try {
        await connection
        console.log("connect to dataBase")
    } catch (error) {
        console.log("something went wrong")
    }
    console.log("server running on port 8080")
})
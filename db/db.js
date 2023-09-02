const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb+srv://khansohail015:959812@cluster0.kty6zcm.mongodb.net/foodapp?retryWrites=true&w=majority")
const sagarSchema = mongoose.Schema(
    {
        name: String,
        choice: String,
        quantity: Number,


    },
    {
        versionKey: false,
    }
);
const sagarModel = mongoose.model("sagarDetails", sagarSchema);
const pizaaSchema = mongoose.Schema(
    {
        name: String,
        choice: String,
        quantity: Number,


    },
    {
        versionKey: false,
    }
);
const pizzaModel = mongoose.model("pizzaDetails", pizaaSchema);
const burgerSchema = mongoose.Schema(
    {
        name: String,
        choice: String,
        quantity: Number,


    },
    {
        versionKey: false,
    }
);

const burgerModel = mongoose.model("burgerDetails", burgerSchema);
const otherSchema = mongoose.Schema(
    {
        name: String,
        choice: String,
        quantity: Number,


    },
    {
        versionKey: false,
    }
);
const otherModel = mongoose.model("otherDetails", otherSchema);
module.exports = {
    connection,
    sagarModel,
    pizzaModel,
    burgerModel,
    otherModel
}
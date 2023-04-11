const mongoose = require("mongoose")

const resultSchema = new mongoose.Schema({
    username: {
        type:String,
        required:[true,"Please Provide username"]
    },
    points:{
        type: Number,
        required:[true, "Please provide the points earned"]
    }, 
    totalPoints:{
        type: Number,
        required:[true, "Please provide the total points"]
    },
    createdAt: {type: Date, default: Date.now},
})

module.exports = new mongoose.model("Result", resultSchema)
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    password: {
    },

})

const userModel = mongoose.model("userModel", userSchema)
module.exports = userModel;
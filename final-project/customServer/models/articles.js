const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    title:{
        type: String
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    },
    keywords: {
        type: String
    },
    comments: [{
        
    }]

})

const articleModel = mongoose.model("articles", userSchema)
module.exports = articleModel;
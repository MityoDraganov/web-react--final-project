const userModel = require("../models/user")

function userCreationPost(req,res){
    const data = req.body
    console.log(data)
    const toSend = JSON.stringify(data)
    /*
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });
    */
    
    res.send(toSend)
    res.end()
}

module.exports = {userCreationPost}
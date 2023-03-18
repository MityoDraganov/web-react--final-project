const userModel = require("../models/user")

    async function userCreationPost(req,res){
    const data = req.body
    console.log(data)
    const user = await userModel.create({...data})
    const toSend = JSON.stringify(user)
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
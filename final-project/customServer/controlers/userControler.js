    const bcrypt = require("bcrypt")
    const jwtPromises = require("../lib/jwtPromisifier")
    const {secret} = require("../config")


    const userModel = require("../models/user")

    async function userCreationPost(req,res){
    const data = req.body
    
    const { password, rePassowrd, ...rest } = data;

    const hash = await bcrypt.hash(password, 10)

    const body = Object.assign({}, rest);
    const user = await userModel.create({...body, "password": hash})
    //const toSend = JSON.stringify(user)
    /*
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });
    */

    const token = await jwtPromises.sign({username: rest.username}, secret)
    res.send(JSON.stringify({
        'token': token,
        'firstName': rest.firstName,
        'lastName': rest.lastName,
        'imageUrl': rest.imageUrl,
        'email' : rest.email
}))
    res.end()
}

    async function useLogin(req,res){
        const data = req.body
    }

module.exports = {userCreationPost}
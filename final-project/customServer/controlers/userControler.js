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

    const token = await jwtPromises.sign({email: rest.email}, secret)
    res.send(JSON.stringify({
        "token": token,
        "_id": user._id,
        //'firstName': rest.firstName,
        //'lastName': rest.lastName,
        //'imageUrl': rest.imageUrl,
        //'email' : rest.email
}))
    res.end()
}

    async function userLogin(req,res){
        const {email, password} = {...req.body}
        
        const user = await userModel.find({email: email}).lean()
        const token = await jwtPromises.sign({email: email}, secret)

        console.log('user')

        console.log(user)
        res.send(JSON.stringify({
        "token": token,
        "_id": user[0]._id,
        //'firstName': rest.firstName,
        //'lastName': rest.lastName,
        //'imageUrl': rest.imageUrl,
        //'email' : rest.email
})) 
    }

module.exports = {userCreationPost, userLogin}
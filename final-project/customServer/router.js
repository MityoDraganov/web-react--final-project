const Router = require('express').Router()
const userControler = require("./controlers/userControler")

Router.post('/users', (req,res)=>{
    userControler.userCreationPost(req,res)
})





module.exports = Router
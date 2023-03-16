const Router = require('express').Router()

//controlers
const userControler = require("./controlers/userControler")
const itemControler = require("./controlers/itemControler")


Router.post('/users', (req,res)=>{
    userControler.userCreationPost(req,res)
})

Router.post('/items/create', (req,res)=>{

    itemControler.itemPost(req,res)

})





module.exports = Router
const Router = require('express').Router()

//controlers
const userControler = require("./controlers/userControler")
const itemControler = require("./controlers/itemControler")


Router.post('/users/register', (req,res)=>{
    userControler.userCreationPost(req,res)
})


//item create
Router.post('/items/create', (req,res)=>{

    itemControler.itemPost(req,res)

})


//get one item

Router.get('/items/:id', (req, res) =>{
    itemControler.getOneItem(req, res)
})



//get all items
Router.get('/items', (req, res) =>{
    itemControler.getAllItems(req, res)
})

module.exports = Router
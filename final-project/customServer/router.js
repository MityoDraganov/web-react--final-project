const Router = require('express').Router()

//controlers
const userControler = require("./controlers/userControler")
const itemControler = require("./controlers/itemControler")

//AUTH
Router.post('/users/register', (req,res)=>{
    userControler.userCreationPost(req,res)
})

Router.post('/users/login', (req,res)=>{
    userControler.userLogin(req,res)
})


//item create
Router.post('/items/create', (req,res)=>{

    itemControler.itemPost(req,res)

})
//item edit
Router.put('/items/edit/:id', (req,res)=>{

    itemControler.itemEdit(req,res)

})
//item delete
Router.delete('/items/delete/:id', (req, res) => {
    itemControler.itemDelete(req,res)
})



//get one item

Router.get('/items/:id', (req, res) =>{
    itemControler.getOneItem(req, res)
})

Router.get('/items/MyArticles/:id', (req, res) =>{
    itemControler.getMyArticlesAndComments(req,res)
})



//get all items
Router.get('/items', (req, res) =>{
    itemControler.getAllItems(req, res)
})

//get items by search
Router.get("/items/search/:keyword", (req, res) =>{
    itemControler.getItemsBySearch(req, res)
})

//post comment

Router.post('/comments/:id', (req, res) =>{
    itemControler.postComment(req, res)
})


//edit comment
Router.put('/comments/edit/:id', (req, res) =>{
    itemControler.editComment(req,res)
})


//delete comment
Router.delete('/comments/delete/:id', (req, res) =>{
    itemControler.deleteComment(req, res)
})

//get one comment
Router.get('/comments/:id', (req, res) =>{
    itemControler.getOneComment(req, res)
})


module.exports = Router
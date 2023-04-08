// Import dependencies
const express = require('express');
const Router = express.Router();
const itemControler = require("./controlers/itemControler");
const userControler = require("./controlers/userControler")

const {authMiddleware} = require("./middlewears/tokenVerifier")

// Routes


Router.post('/users/register', (req,res)=>{
    userControler.userCreationPost(req,res)
})

Router.post('/users/login', (req,res)=>{
    userControler.userLogin(req,res)
})


Router.get('/items', itemControler.getAllItems);
Router.get('/items/:id', itemControler.getOneItem);
Router.get('/items/MyArticles/:id', itemControler.getMyArticlesAndComments);
Router.get('/items/search/:keyword([^/]+)', itemControler.getItemsBySearch);
Router.post('/items/create', authMiddleware, itemControler.itemPost);
Router.put('/items/edit/:id', authMiddleware, itemControler.itemEdit);
Router.delete('/items/delete/:id', authMiddleware, itemControler.itemDelete);


Router.post('/comments/:id', authMiddleware, itemControler.postComment);
Router.put('/comments/edit/:id', authMiddleware, itemControler.editComment);
Router.delete('/comments/delete/:id', authMiddleware, itemControler.deleteComment);
Router.get('/comments/:id', itemControler.getOneComment);

// Export router
module.exports = Router;

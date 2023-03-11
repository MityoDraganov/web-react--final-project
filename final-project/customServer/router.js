const Router = require('express').Router()

Router.post('/users', (req,res)=>{
    res.send('Home Page')
    res.end()
})





module.exports = Router
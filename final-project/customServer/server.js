const express = require('express')
const Router = require('./router')
const cors = require('cors')


const app = express();


const corsOptions = {
    "Access-Control-Allow-Origin": "*"
}

//app.use(corsOptions)


app.use(Router)


app.listen(3030, ()=>{
    console.log("Server is running on port 3030...")
})
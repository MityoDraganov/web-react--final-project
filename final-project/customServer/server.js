const express = require('express')
const Router = require('./router')
const cors = require('cors')
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express();


const corsOptions = {
    "Access-Control-Allow-Origin": "*"
}

//app.use(corsOptions)
app.use(cors({ origin: "*", credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

async function main(){
    mongoose.set('strictQuery', false)
    await mongoose.connect('mongodb://127.0.0.1:27017/CubicleDataBaseProject')
    console.log("DB connected...")
}
main().catch(err => console.log(err))

app.use(Router)


app.listen(3030, ()=>{
    console.log("Server is running on port 3030...")
})
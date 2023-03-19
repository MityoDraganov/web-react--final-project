const articlesModel = require("../models/articles")


//create item
const itemPost = async(req,res) =>{
    console.log(req.body)
    const data = req.body

    const article =  await articlesModel.create({
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        keywords: data.keywords
    })
    await article.save()
    res.send(article)
    res.end()
}


//get all items
const getAllItems = async (req, res) =>{
    const items = await articlesModel.find()
    console.log(items)
    res.send(JSON.stringify(items))
}

//get one item by id
const getOneItem = async (req,res) =>{
    const id = req.params.id
    

    const item = await articlesModel.findById(id)

    res.send(JSON.stringify(item))
}

module.exports = {itemPost, getAllItems, getOneItem}
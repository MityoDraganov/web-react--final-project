const articlesModel = require("../models/articles")


//create item
const itemPost = async(req,res) =>{
    console.log(req.body)
    const data = req.body

    const article =  await articlesModel.create({
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        keywords: data.keywords,
        author: data.userId
    })
    await article.save()
    res.send(article)
    res.end()
}

const itemEdit = async(req, res) => {
    const data = req.body
    const _id = req.params.id

    const article = await articlesModel.findOneAndUpdate(
        {_id: _id},
        {...data}
    ).lean()

    res.send(JSON.stringify(article))
}

const itemDelete = async(req, res) => {
    const _id = req.params.id

    const article = await articlesModel.findByIdAndDelete(
        {_id: _id}
    ).lean()

    res.send(JSON.stringify(article))
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
    

    const item = await articlesModel.findById(id).populate("author")

    res.send(JSON.stringify(item))
}

module.exports = {itemPost, getAllItems, getOneItem, itemEdit, itemDelete}
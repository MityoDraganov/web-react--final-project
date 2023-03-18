const articlesModel = require("../models/articles")

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

const getAllItems = async (req, res) =>{
    const items = await articlesModel.find()
    console.log(items)
    res.send(JSON.stringify(items))
}

module.exports = {itemPost, getAllItems}
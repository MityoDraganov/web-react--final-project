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
    //res.send(JSON.stringify(article))
    res.redirect("/articles/dashboard")
}

module.exports = {itemPost}
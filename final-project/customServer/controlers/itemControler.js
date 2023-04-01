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

const postComment = async(req, res) =>{
    const itemId = req.params.id
    
    const {message, userId} = req.body

    const article = await articlesModel.findById(itemId)

    article.comments.push({
        authorId: userId,
        comment: message
    })
    
    await article.save()

    res.send(JSON.stringify(article))
}



//get all items
const getAllItems = async (req, res) =>{
    const items = await articlesModel.find()
    console.log(items)
    res.send(JSON.stringify(items))
}

const getMyArticlesAndComments = async (req, res) =>{
    try {
    const id = req.params.id
    const myArticles = await articlesModel.find({author: id}).lean()
    
        const articles = await articlesModel.find()
          .populate({
            path: 'comments.authorId',
            match: { _id: id }
          })
          .exec();
    
        // Filter the comments based on the author's _id
        const myComments = articles.reduce((acc, article) => {
          acc.push(...article.comments.filter(comment => comment.userId));
          return acc;
        }, []);

        res.send(JSON.stringify({
            myArticles,
            myComments
        }))



      } catch (error) {
        console.error(error);
        return null;
      }
    


}

//get one item by id
const getOneItem = async (req,res) =>{
    const id = req.params.id
    

    //const item = await articlesModel.findById(id).populate("author").populate("comments", "userId message")


    const item = await articlesModel
    .findById(id)
    .populate({
      path: 'author',
      select: 'firstName lastName email imageUrl'
    })
    .populate({
      path: 'comments.authorId',
      select: 'firstName lastName email imageUrl comment'
    })
    .lean();


    res.send(JSON.stringify(item))
}





module.exports = {itemPost, getAllItems, getOneItem, itemEdit, itemDelete, getMyArticlesAndComments, postComment, }
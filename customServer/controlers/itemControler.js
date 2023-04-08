const articlesModel = require("../models/articles")


//create item
const itemPost = async(req,res) =>{
    console.log(req.body)
    const data = req.body

    const keywords = data.keywords.split(", ")

    const article =  await articlesModel.create({
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        keywords: data.keywords,
        author: data.userId,
        keywords: keywords
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

//get items by search
const getItemsBySearch = async (req , res) =>{
  const keyword = req.params.keyword

  if (!keyword || keyword.trim().length === 0) {
    return res.status(400).json({ message: 'Invalid search keyword' });
  }
  
  if(keyword !== undefined && keyword.length > 0) {
  try {

    

    const articles = await articlesModel.find({
      keywords: {
        $regex: keyword,
        $options: 'i' // case-insensitive search
      }
    }).populate('author')
    .populate('comments')

    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
  
}


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
          acc.push(...article.comments.filter(comment => comment.authorId));
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

  const getOneComment = async(req, res) =>{
    const commentId = req.params.id;

    try {
      const article = await articlesModel.findOne({'comments._id': commentId});

      if (!article) {
        return res.status(404).send('Comment not found');
      }

      const comment = article.comments.find(comment => comment._id.toString() === commentId.toString());
      


      if (!comment) {
        return res.status(404).send('Comment not found');
      }

      console.log('comment')
      console.log(comment)

      res.send(JSON.stringify(comment));


    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }

  }

  const editComment = async(req, res) =>{
    const commentId = req.params.id;
    const commentData = req.body;

    try {
        const article = await articlesModel.findOneAndUpdate(
            {"comments._id": commentId},
            {"$set": {"comments.$.comment": commentData.comment}},
            {new: true}
        ).populate("comments.authorId", "firstName lastName email imageUrl").lean();

        res.send(JSON.stringify(article));
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
  }

  const deleteComment = async (req, res) => {
    try {
      const article = await articlesModel.findOneAndUpdate(
        { "comments._id": req.params.id },
        { $pull: { comments: { _id: req.params.id } } },
        { new: true }
      );
      if (!article) {
        return res.status(404).json({ message: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };
  
  





module.exports = {itemPost, getAllItems, getOneItem, itemEdit, itemDelete, getMyArticlesAndComments, getItemsBySearch, postComment, getOneComment, editComment, deleteComment}
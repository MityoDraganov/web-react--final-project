import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMyArticles } from "../../service/itemsService"
import { ItemRenderer } from "../Article/Item"
import { NoArticlesYet } from "../NoArticlesYet/NoArticlesYet"
import { Comment } from "../Comment/Comment"
import { NoComment } from "../NoComment/NoComment"

export const MyArticles = () => {
  const { id } = useParams()

  const [myArticlesAndComments, setMyArticlesAndComments] = useState({
    myArticles: [],
    myComments: [],
  })

  useEffect(() => {
    getMyArticles(id)
      .then((data) => setMyArticlesAndComments(data))
      .catch((err) => {
        console.log(err)
        return
      })
  }, [id])

  const noArticles = myArticlesAndComments.myArticles.length === 0;
  const noComments = myArticlesAndComments.myComments.length === 0;

  if(noArticles && !noComments){
    return(    
      <> 
        <NoArticlesYet />
        <h3>My Comments</h3>
        {myArticlesAndComments.myComments.map((x) => {
          return <Comment key={x._id} comment={x} />
        })}
      </>
    )
  } else if(noComments && !noArticles){
    return(
      <>
      <h3>My Articles</h3>
      {myArticlesAndComments.myArticles.map((x) => {
        return <ItemRenderer {...x} />
      })}
      <NoComment />
    </>
    )
  } else if(noArticles && noComments){
    return(
      <>
        <div>
        <h1>😔</h1>
        <h3>No Articles yet...</h3>
        </div>
        
      
        <div>              
              <h1>😔</h1>
              <h3>No Comments yet...</h3>

          </div>
      </>
    )
  } else{
    return(
      <>
    <h3>My Articles</h3>
    {myArticlesAndComments.myArticles.map((x) => {
      return <ItemRenderer {...x} />
      })}

      <h3>My Comments</h3>
      {myArticlesAndComments.myComments.map((x) => {
        return <Comment key={x._id} comment={x} />
      })}
      </>
    )
    }
  }
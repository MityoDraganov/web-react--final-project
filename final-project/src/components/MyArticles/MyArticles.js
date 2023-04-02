import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMyArticles } from "../../service/itemsService"
import { ItemRenderer } from "../Article/Item"
import { NoArticlesYet } from "../NoArticlesYet/NoArticlesYet"
import { Comment } from "../Comment/Comment"

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



  if (
    myArticlesAndComments.myArticles !== undefined &&
    myArticlesAndComments.myComments !== undefined
  ) {
    if (
      myArticlesAndComments.myArticles.length === 0 &&
      myArticlesAndComments.myComments.length === 0
    ) {
      return <NoArticlesYet />
    } else {
      return (
        <>
          {myArticlesAndComments.myArticles.length > 0 && (
            <>
              <h3>My Articles</h3>
              {myArticlesAndComments.myArticles.map((x) => {
                return <ItemRenderer {...x} />
              })}
            </>
          )}
          {myArticlesAndComments.myComments.length > 0 && (
            <>
              <h3>My Comments</h3>
              {myArticlesAndComments.myComments.map((x) => {
                return <Comment key={x._id} comment={x} />
              })}
            </>
          )}
        </>
      )
    }
  }

  return null
}

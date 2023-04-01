import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMyArticles } from "../../service/itemsService"
import { ItemRenderer } from "../Article/Item"
import { NoArticlesYet } from "../NoArticlesYet/NoArticlesYet"
import {Comment} from "../Comment/Comment"
export const MyArticles =  () => {
    const {id} = useParams()

    const [myArticlesAndComments, setmyArticlesAndComments] = useState({
        myArticles: [],
        myComments: [],
    })

    useEffect(() => {
        getMyArticles(id)
        .then(data => setmyArticlesAndComments(data))
    }, [])

    console.log(myArticlesAndComments)

    if(myArticlesAndComments.myArticles !== undefined){
        if(myArticlesAndComments.myArticles.length === 0){
            return(
                <NoArticlesYet />
            )
        } else{
            return(
                 <>
                    <h3>My Articles</h3>
                    {myArticlesAndComments.myArticles.map(x =>{
                        return(<ItemRenderer  {...x} />)
                    })}
                    <h3>My Comments</h3>
                    {myArticlesAndComments.myComments.map(x => {
                        return(<Comment key={x._id} {...x} />)
                    })}
                 </>
            ) 
        }
    }
}
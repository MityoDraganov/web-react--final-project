import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMyArticles } from "../../service/itemsService"
import { ItemRenderer } from "../Article/Item"
import { NoArticlesYet } from "../NoArticlesYet/NoArticlesYet"

export const MyArticles =  () => {
    const {id} = useParams()

    const [myArticlesValues, setmyArticlesValues] = useState()

    useEffect(() => {
        getMyArticles(id)
        .then(data => setmyArticlesValues(data))
    }, [])

    

    if(myArticlesValues !== undefined){
        if(myArticlesValues.length == 0){
            return(
                <NoArticlesYet />
            )
        } else{
            return(
                 <>
                    {myArticlesValues.map(x =>{
                        return(<ItemRenderer key={x._id} {...x} />)
                    })}
                 </>
            ) 
        }
    }
}
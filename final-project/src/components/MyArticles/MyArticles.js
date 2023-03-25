import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMyArticles } from "../../service/itemsService"
import { ItemRenderer } from "../Article/Item"

export const MyArticles =  () => {
    const {id} = useParams()

    const [myArticlesValues, setmyArticlesValues] = useState()

    useEffect(() => {
        getMyArticles(id)
        .then(data => setmyArticlesValues(data))
    }, [])

    if(myArticlesValues !== undefined){
    return(
        <>
        {myArticlesValues.map(x =>{
            return(<ItemRenderer key={x._id} {...x} />)
        })}
        </>
    )
    } else{
        return(
            null
        )
    }


}
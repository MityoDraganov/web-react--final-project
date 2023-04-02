import {ItemRenderer} from "../Article/Item"
import {useState, useEffect} from "react"
import {getAllItems} from "../../service/itemsService"
import { NoArticlesYet } from "../NoArticlesYet/NoArticlesYet";
export const ItemDashboard = () =>{


    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        getAllItems()
        .then(res => {

            setArticles(Object.values(res))
        })

    }, [])

    

    if(articles.length == 0){
        return(
            <NoArticlesYet />
        )
    }
    
    return(
        <>
        {articles.map(x =>{
            return(<ItemRenderer key={x._id} {...x} />)
        })}
        </>
    )
}
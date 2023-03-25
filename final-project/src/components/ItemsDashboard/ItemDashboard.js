import {ItemRenderer} from "../Article/Item"
import {useState, useEffect} from "react"
import {getAllItems} from "../../service/itemsService"
export const ItemDashboard = () =>{


    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        getAllItems()
        .then(res => {
            console.log("render")
            setArticles(Object.values(res))
        })

    }, [])

    


    return(
        <>
        {articles.map(x =>{
            return(<ItemRenderer key={x._id} {...x} />)
        })}
        </>
    )
}
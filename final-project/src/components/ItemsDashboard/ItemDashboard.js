import {ItemRenderer} from "../Article/Item"
import {useState, useEffect} from "react"
import {getAllItems} from "../../service/itemsService"
import { NoArticlesYet } from "../NoArticlesYet/NoArticlesYet";

import styles from "./ItemDashboard.module.css"
import { Search } from "../Search/Search";

import { ArticlesContext } from "../../contexts/ArticlesContext";

export const ItemDashboard = () =>{


    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        getAllItems()
        .then(res => {

            setArticles(Object.values(res))
        })

    }, [])

    const ArticlesContextValue = {
      setArticles,
      articles
    }

    

    if(articles.length === 0){
        return(
            <NoArticlesYet />
        )
    }
    
    return (
        <>
        <ArticlesContext.Provider value={ArticlesContextValue}>
        <Search />
        <div className={styles.container}>
          {articles.map((x) => {
            return (
              <div key={x._id} className={styles.card}>
                <ItemRenderer {...x} />
              </div>
            );
          })}
        </div>
        </ArticlesContext.Provider>
        </>
      );
      
}
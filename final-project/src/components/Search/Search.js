import styles from "./Search.module.css"


import { useState } from "react";


import { useContext } from "react";
import { ArticlesContext } from "../../contexts/ArticlesContext";
import { getBySearch } from "../../service/itemsService";

import { searchValidationService } from "../../service/itemValidationService";

export const Search = () =>{

    const [searchTerm, setSearchTerm] = useState({
        search: ""
    })


    
    const {setArticles} = useContext(ArticlesContext)

    const onSubmitHandler = async (e) =>{
            e.preventDefault()


            const isValid = searchValidationService(searchTerm.search.trim())
            if(isValid){
                
                console.log('keyword')
                console.log(searchTerm.search)
                const matchedArticles = await getBySearch(searchTerm.search)
                if(matchedArticles === null){
                    return
                }
            setArticles(Object.values(matchedArticles))
            setSearchTerm({
                search: ""
            })
        } 
    }

    const onChangeHandler = (e) =>{
        setSearchTerm(state => ({...state, [e.target.name]: e.target.value}))
    }


    return(
        <form className={styles["form"]} onSubmit={onSubmitHandler}>
            <input className={styles["input"]} type="text" placeholder="Search.." name="search" onChange={onChangeHandler} value={searchTerm.search}/>
            <button type="submit" className={styles["btn"]}><i className="fa fa-search"></i></button>
        </form>
    )
}
import styles from "./Search.module.css"


import { useState } from "react";
import { useHistory } from "react-router-dom";

import { useContext } from "react";
import { NavContext } from "../../contexts/NavContext";
import { ArticlesContext } from "../../contexts/ArticlesContext";
import { getBySearch } from "../../service/itemsService";

export const Search = () =>{

    const [searchTerm, setSearchTerm] = useState({
        search: ""
    })


    const {navigate, onBackHangler} = useContext(NavContext)
    
    const {setArticles} = useContext(ArticlesContext)

    const onSubmitHandler = async (e) =>{
            e.preventDefault()

            const matchedArticles = await getBySearch(searchTerm.search)
            setArticles(Object.values(matchedArticles))
            setSearchTerm({
                search: ""
            })

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
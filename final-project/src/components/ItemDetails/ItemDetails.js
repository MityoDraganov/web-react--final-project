import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import { useEffect, useState } from "react"


import { getOneItem } from "../../service/itemsService"
import styles from "./ItemDetails.module.css"

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


export const ItemDetails =  () => {

    const {id} = useParams()
    console.log(id)
    const [data, setData] = useState({
        author: {}
    })

    const {userId} = useContext(AuthContext)
    
    useEffect(()=>{
        const fetchData = async () =>{
            const article = await getOneItem(id)
            setData(article)
        }
        fetchData()
    }, [])
    
    //const authorId = data.author._id
    //const post = await getOneItem(id)


    console.log(data)

    if(userId == data.author._id){


        return(
            <div  className={styles['details-item-div']}>
    
            <img className={styles['details-item-img']} src={data.imageUrl}></img>
            <p><span>Title:</span> {data.title}</p>
            <label>Description:</label>
            <textarea defaultValue={data.description} className={styles['details-item-txtarea']}></textarea>
            
            <div>
                <button className={styles['details-item-btn']}><Link to={`/articles/edit/${id}`}>Edit</Link></button>
                <button className={styles['details-item-btn']}><Link to={`/articles/delete/${id}`}>Delete</Link></button>
            </div>
    
            <footer>
                <div className="details-comment-section">
                    <img></img>
                    <h2></h2>
                    <p></p>
                </div>
            </footer>
            </div>
        )



    }else if(userId){

        return(
            <div  className={styles['details-item-div']}>
    
            <img className={styles['details-item-img']} src={data.imageUrl}></img>
            <p><span>Title:</span> {data.title}</p>
            <label>Description:</label>
            <textarea defaultValue={data.description} className={styles['details-item-txtarea']}></textarea>
            
         
    
            <footer>
                <div className="details-comment-section">
                    <img></img>
                    <h2></h2>
                    <p></p>
                </div>
            </footer>
            </div>
        )


    } else{


        return(
            <div  className={styles['details-item-div']}>
    
            <img className={styles['details-item-img']} src={data.imageUrl}></img>
            <p><span>Title:</span> {data.title}</p>
            <label>Description:</label>
            <textarea defaultValue={data.description} className={styles['details-item-txtarea']}></textarea>
            
          
    
            <footer>
                <div className="details-comment-section">
                    <img></img>
                    <h2></h2>
                    <p></p>
                </div>
            </footer>
            </div>
        )


    }
}
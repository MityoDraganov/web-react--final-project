import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import { useEffect, useState } from "react"


import { getOneItem } from "../../service/itemsService"
import styles from "./ItemDetails.module.css"

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { Comment } from "../Comment/Comment"


export const ItemDetails =  () => {

    const {id} = useParams()
    console.log(id)
    const [data, setData] = useState({
        author: {},
        comments: [],
    })
    console.log(data.comments)

    const {userId} = useContext(AuthContext)
    

    useEffect(()=>{
        const fetchData = async () =>{
            const article = await getOneItem(id)
            setData(article)
        }
        fetchData()
    }, [id])    
    
    //const authorId = data.author._id
    //const post = await getOneItem(id)


    console.log(data)

    if(userId ===    data.author._id){


        return(
            <div  className={styles['details-item-div']}>
    
            <img className={styles['details-item-img']} src={data.imageUrl} alt={data.title}></img>
            <h2><span>Title:</span> {data.title}</h2>

            <label className="details-item-label">Description:</label>
            
            <textarea value={data.description} className={styles['details-item-txtarea']} readOnly />
            

            
            <div>
                <Link className="details-item-a" to={`/articles/edit/${id}`}><button className={styles['details-item-btn']}>Edit</button></Link>
                <Link className="details-item-a" to={`/articles/delete/${id}`}><button className={styles['details-item-btn']}>Delete</button></Link>
            </div>
    
            <footer>
                <h2>Comments:</h2>
                <div className="details-comment-section">
                    {
                        data.comments.length === 0 ?
                        <div>
                            
                            <h1>😔</h1>
                            <h3>No Comments yet...</h3>

                        </div>
                        :
                        data.comments.map(comment => (
                            
                            <Comment key={comment._id} comment={comment} />
                        ))
                    
                    }
                </div>
            </footer>
            </div>
        )



    }else if(userId){

        return(
            <div  className={styles['details-item-div']}>
    
            <img className={styles['details-item-img']} src={data.imageUrl} alt={data.title}></img>
            <h2><span>Title:</span> {data.title}</h2>
            

            <label className="details-item-label">Description:</label>


            <textarea value={data.description} className={styles['details-item-txtarea']} readOnly />



            <Link className="details-item-a" to={`/articles/writeComment/${id}`}><button className={styles['details-item-btn']}>Write a comment</button></Link>
         
    
            <footer>
                <h2>Comments:</h2>
                <div className="details-comment-section">
                    {
                        data.comments.length === 0 ?
                        <div>
                            
                            <h1>😔</h1>
                            <h3>No Comments yet...</h3>

                        </div>
                        :
                        data.comments.map(comment => (
                            <Comment key={comment.id} comment={comment} />
                        ))
                    
                    }
                </div>
            </footer>
            </div>
        )


    } else{


        return(
            <div  className={styles['details-item-div']}>
    
            <img className={styles['details-item-img']} src={data.imageUrl} alt={data.title}></img>


            <h2><span>Title:</span> {data.title}</h2>


            <label className="details-item-label">Description:</label>


            <textarea value={data.description} className={styles['details-item-txtarea']} readOnly />
            
          
    
            <footer>
                <h2>Comments:</h2>
                <div className="details-comment-section">
                    {
                        data.comments.length === 0 ?
                        <div>
                            
                            <h1>😔</h1>
                            <h3>No Comments yet...</h3>

                        </div>
                        :
                        data.comments.map(comment => (
                            <Comment key={comment.id} comment={comment} />
                        ))
                    
                    }
                </div>
            </footer>
            </div>
        )


    }
}
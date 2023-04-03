import styles from "./Comment.module.css"

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { Link } from "react-router-dom";

export const Comment = ({comment}) =>{


    const {userId} = useContext(AuthContext)

    console.log(comment)


    if(comment !== undefined){
    
    if(comment.authorId._id === userId){
    return(
        <div className={styles["comment-div"]}>
            <img className={styles["comment-avatar"]} src={comment.authorId.imageUrl} alt={`${comment.authorId.firstName}'s avatar`} />
            <div className={styles["comment-content"]}>
                <p className={styles["comment-author"]}>{comment.authorId.firstName}</p>
                <p className={styles["comment-message"]}>{comment.comment}</p>
            </div>
            <button className={styles['comment-btn']}><Link className="comment-a" to={`/comments/edit/$`}>Edit</Link></button>
            <button className={styles['comment-btn']}><Link className="comment-a" to={`/comments/delete/$`}>Delete</Link></button>
        </div>
    )
    } else{
        return(
            <div className={styles["comment-div"]}>
            <img className={styles["comment-avatar"]} src={comment.authorId.imageUrl} alt={`${comment.authorId.firstName}'s avatar`} />
            <div className={styles["comment-content"]}>
                <p className={styles["comment-author"]}>{comment.authorId.firstName}</p>
                <p className={styles["comment-message"]}>{comment.comment}</p>
            </div>
        </div>
        )
    }
    }
}

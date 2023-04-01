import styles from "./Comment.module.css"

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


export const Comment = ({comment}) =>{
    console.log('author id')
    //console.log(authorId)
    const {userId} = useContext(AuthContext)
    if(comment !== undefined){

    if(comment.authorId._id === userId){
    return(
        <div className={styles["comment-div"]}>
            <img className={styles["comment-avatar"]} src={comment.authorId.imageUrl} alt={`${comment.authorId.firstName}'s avatar`} />
            <div className={styles["comment-content"]}>
                <p className={styles["comment-author"]}>{comment.authorId.firstName}</p>
                <p className={styles["comment-message"]}>{comment.comment}</p>
            </div>
            <button>Edit</button>
            <button>Delte</button>
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

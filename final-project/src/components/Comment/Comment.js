import styles from "./Comment.module.css"

export const Comment = ({comment, userId}) =>{
    return(
        <div className={styles["comment-div"]}>
            <img className={styles["comment-avatar"]} src={userId.imageUrl} alt={`${userId.firstName}'s avatar`} />
            <div className={styles["comment-content"]}>
                <p className={styles["comment-author"]}>{userId.firstName}</p>
                <p className={styles["comment-message"]}>{comment}</p>
            </div>
        </div>
    )
}

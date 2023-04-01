// Comments.js
import { Comment } from "../Comment/Comment"

export const Comments = ({comments}) => {
  if (comments.length === 0) {
    return (
      <>
        <h1>😔</h1>
        <h3>No Comments yet...</h3>
      </>
    )
  } else {
    return (
      <div className="comments">
        {
            comments.length === 0 ?
            <div>No comments yet</div>
            :
            comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))
        
        }
      </div>
    )
  }
}

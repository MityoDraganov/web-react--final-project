import styles from "./CommentDelete.module.css"

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { NavContext } from "../../contexts/NavContext";
import { useContext } from "react";
import { deleteComment, getOneComment } from "../../service/commentSerivce";

export const CommentDelete = () => {

    const {navigate, onBackHangler} = useContext(NavContext)

    //comment id
    const {id} = useParams()

    const [data, setData] = useState({
        comment: "",
    })

    useEffect(()=>{
        const fetchData = async () =>{
            const comment = await getOneComment(id)
            console.log(comment)
            setData(comment)
    }
        fetchData()
    }, [id])

    const onSubmitHandler = async (e) =>{
        e.preventDefault()
        
        const response = await deleteComment(id)
        onBackHangler()
    }

    const onChangeHandler = (e) =>{
        setData(state => ({...state, [e.target.name]: e.target.value}))
    }


    return (
        <>
            <header>
            <h2>Delete Comment</h2>
            </header>


            <form className={styles["user-form"]} onSubmit = {onSubmitHandler}>

                
                    
            <div className={styles["form-row"]}>
           
                    <div className={styles["form-group"]}>
                    <label htmlFor="firstName">Message:</label>
                    <div className="input-wrapper">
                        <span>
                        <i className="fa-solid fa-user"></i>
                        </span>
                        <input className={styles["form-input"]} id="comment" name="comment" type="text" onChange={onChangeHandler} value={data.comment} disabled={true}/>
                    </div>
                    </div>

                    <div id="form-actions">
                    <button id="action-save" className={styles["btn"]} type="submit">
                    Delete
                    </button>
                    <button id="action-cancel" className={styles["btn"]} type="button" onClick={onBackHangler}>
                    Cancel
                    </button>
                </div>
                </div>
                </form>
        </>
    );
}
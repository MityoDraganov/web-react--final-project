import styles from "./CommentEdit.module.css"

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { NavContext } from "../../contexts/NavContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

import { editComment, getOneComment } from "../../service/commentSerivce";

export const CommentEdit = () => {

    const {navigate, onBackHangler} = useContext(NavContext)

    //comment id
    const {id} = useParams()

    const [data, setData] = useState({
        comment: "",
    })

    

    const {token} = useContext(AuthContext)


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
        
        const response = await editComment(data, id, token)
        console.log(response)
        onBackHangler()
    }

    const onChangeHandler = (e) =>{
        setData(state => ({...state, [e.target.name]: e.target.value}))
    }


    return (
        <>
            <header>
            <h2>Edit Comment</h2>
            </header>


            <form className={styles["user-form"]} onSubmit = {onSubmitHandler}>

                
                    
            <div className={styles["form-row"]}>
           
                    <div className={styles["form-group"]}>
                    <label htmlFor="firstName">Message:</label>
                    <div className="input-wrapper">

                        <input className={styles["form-input"]} id="comment" name="comment" type="text" onChange={onChangeHandler} value={data.comment}/>
                    </div>
                    </div>

                    <div id="form-actions">
                    <button id="action-save" className={styles["btn"]} type="submit">
                    Save
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
import styles from "./ItemDelete.module.css"
import { getOneItem } from "../../service/itemsService";
import {deleteItem} from "../../service/itemsService"


import { useEffect, useState } from "react";

import { NavContext } from "../../contexts/NavContext";
import { AuthContext } from "../../contexts/AuthContext";

import { useContext } from "react";

import { useParams } from "react-router-dom";

export const ItemDelete = () => {

    const {id} = useParams()

    const {navigate, onBackHangler} = useContext(NavContext)

    const {token} = useContext(AuthContext)



    const [values, setValues] = useState({
        title: '',
        description: '',
        description: '',
        imageUrl: '',
        keywords: '',
    })


    useEffect(()=>{
        const fetchData = async () =>{
            const article = await getOneItem(id)
            setValues(article)
        }
        fetchData()
    }, [])

    const onChangeHandler = (e) =>{
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

const onSubmitHandler = async (e) =>{
    e.preventDefault()
    

    const response = await deleteItem(values, id, token)
    console.log("response")
    console.log(response)
    navigate(`/articles/dashboard`)
}

return (
    <>
    <div className="overlay">
        <div className="backdrop"></div>
        <div className="modal">
        <div className="user-container">
            <header className="headers">

            <h2>DELETE  article</h2>

            </header>


            <form className={styles["user-form"]} onSubmit = {onSubmitHandler}>

            
                <div className={styles["form-row"]}>

            <button className={styles["btn-close"]} onClick={onBackHangler}>
                X
            </button>
            
            <div className={styles["tumbnailpicture-frame"]}>
                <img className="tumbnailpicture-frame" src='https://static.thenounproject.com/png/4460304-200.png' alt='tumbnail icon'/>
            </div>
                <div className={styles["form-group"]}>
                <label htmlFor="firstName">Title</label>
                <div className="input-wrapper">

                    <input className={styles["form-input"]} id="title" name="title" type="text" onChange={onChangeHandler} value={values.title} disabled={true}/>
                </div>
                </div>


                

                


            <div className={styles["form-group"]}>
                <label htmlFor="email">Description</label>
                <div className="input-wrapper">

                    <input className={styles["form-input"]} id="description" name="description" type="text" onChange={onChangeHandler} value={values.description} disabled={true}/>
                </div>
                </div>

                <div className={styles["form-group"]}>
                <label htmlFor="firstName">ImageUrl</label>
                <div className="input-wrapper">

                    <input className={styles["form-input"]} id="imageUrl" name="imageUrl" type="text"  onChange={onChangeHandler} value={values.imageUrl} disabled={true}/>
                </div>
                </div>

                <div className={styles["form-group"]}>
                <label htmlFor="Passowrd">keywords to describe video</label>
                <div className="input-wrapper">

                    <input className={styles["form-input"]} id="keywords" name="keywords" type="text" onChange={onChangeHandler} value={values.keywords} disabled={true}/>
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
        </div>
        </div>
    </div>
    </>
);
};

import styles from "./ItemDelete.module.css"
import { getOneItem } from "../../service/itemsService";
import {deleteItem} from "../../service/itemsService"


import { useEffect, useState } from "react";

import {useNavigate} from "react-router-dom"
import { useParams } from "react-router-dom";

export const ItemDelete = ({backingFunc}) => {

    const {id} = useParams()

const navigate = useNavigate()

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
    

    const response = await deleteItem(values, id)
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


            <form className="user-form" onSubmit = {onSubmitHandler}>

            <div className="form-error">
                <p>Last name should be at least 3 characters long!</p>
            </div>

            
                <div className="form-row">

            <button className="btn-close" onClick={backingFunc}>
                X
            </button>
            
            <div className="profilepicture-wraper">
                <img className="tumbnailpicture-frame" src='https://static.thenounproject.com/png/4460304-200.png' alt='tumbnail icon'/>
            </div>
                <div className="form-group">
                <label htmlFor="firstName">Title</label>
                <div className="input-wrapper">
                    <span>
                    <i className="fa-solid fa-user"></i>
                    </span>
                    <input className="form-input" id="title" name="title" type="text" onChange={onChangeHandler} value={values.title} disabled={true}/>
                </div>
                </div>


                

                


            <div className="form-group">
                <label htmlFor="email">Description</label>
                <div className="input-wrapper">
                    <span>
                    <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input className="form-input" id="description" name="description" type="text" onChange={onChangeHandler} value={values.description} disabled={true}/>
                </div>
                </div>

                <div className="form-group">
                <label htmlFor="firstName">ImageUrl</label>
                <div className="input-wrapper">
                    <span>
                    <i className="fa-solid fa-user"></i>
                    </span>
                    <input className="form-input" id="imageUrl" name="imageUrl" type="text"  onChange={onChangeHandler} value={values.imageUrl} disabled={true}/>
                </div>
                </div>

                <div className="form-group">
                <label htmlFor="Passowrd">keywords to describe video</label>
                <div className="input-wrapper">
                    <span>
                    <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input className="form-input" id="keywords" name="keywords" type="text" onChange={onChangeHandler} value={values.keywords} disabled={true}/>
                </div>
                </div>

                


                <div id="form-actions">
                <button id="action-save" className="btn" type="submit">
                Delete
                </button>
                <button id="action-cancel" className="btn" type="button" onClick={backingFunc}>
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

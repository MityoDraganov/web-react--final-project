    import styles from "./ItemEdit.module.css"
    import { getOneItem } from "../../service/itemsService";
    import {editItem} from "../../service/itemsService"


    import { useEffect, useState } from "react";

    import {useNavigate} from "react-router-dom"
    import { useParams } from "react-router-dom";

    import { NavContext } from "../../contexts/NavContext";
    import { useContext } from "react";

    import { itemValidationService } from "../../service/itemValidationService";

    export const ItemEdit = () => {

        const {id} = useParams()
        const {navigate, onBackHangler} = useContext(NavContext)


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
        
        const isValid = itemValidationService(values)
        
        if(isValid){
            
            
            const response = await editItem(values, id)
            console.log("response")
            console.log(response)
            navigate(`/articles/${id}`)


        }
    }

    return (
        <>
            <header>
            <h2>Edit  article</h2>
            </header>


            <form className={styles["user-form"]} onSubmit = {onSubmitHandler}>

                
                    
            <div className={styles["form-row"]}>

                <button className={styles["btn-close"]} type = "button" onClick={onBackHangler}>
                    X
                </button>
                
                <div className={styles["tumbnailpicture-frame"]}>
                    <img className="tumbnailpicture-frame" src='https://static.thenounproject.com/png/4460304-200.png' alt='tumbnail icon'/>
                </div>
                
                    <div className={styles["form-group"]}>
                    <label htmlFor="firstName">Title</label>
                    <div className="input-wrapper">
                        <span>
                        <i className="fa-solid fa-user"></i>
                        </span>
                        <input className={styles["form-input"]} id="title" name="title" type="text" onChange={onChangeHandler} value={values.title}/>
                    </div>
                    </div>


                    

                    


                <div className={styles["form-group"]}>
                    <label htmlFor="email">Description</label>
                    <div className="input-wrapper">
                        <span>
                        <i className="fa-solid fa-envelope"></i>
                        </span>
                        <input className={styles["form-input"]} id="description" name="description" type="text" onChange={onChangeHandler} value={values.description}/>
                    </div>
                    </div>

                    <div className={styles["form-group"]}>
                    <label htmlFor="firstName">ImageUrl</label>
                    <div className="input-wrapper">
                        <span>
                        <i className="fa-solid fa-user"></i>
                        </span>
                        <input className={styles["form-input"]} id="imageUrl" name="imageUrl" type="text"  onChange={onChangeHandler} value={values.imageUrl}/>
                    </div>
                    </div>

                    <div className={styles["form-group"]}>
                    <label htmlFor="Passowrd">keywords to describe video</label>
                    <div className="input-wrapper">
                        <span>
                        <i className="fa-solid fa-envelope"></i>
                        </span>
                        <input className={styles["form-input"]} id="keywords" name="keywords" type="text" onChange={onChangeHandler} value={values.keywords}/>
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
    };

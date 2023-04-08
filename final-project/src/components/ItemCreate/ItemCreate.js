import styles from "./ItemCreate.module.css"

import {useState} from "react"


import {createItem} from "../../service/itemsService"


import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { NavContext } from "../../contexts/NavContext";

import { itemValidationService } from "../../service/itemValidationService";



export const ItemCreate = () => {
  const {navigate, onBackHangler} = useContext(NavContext)




  const {userId, token} = useContext(AuthContext)

  const [values, setValues] = useState({
    title: "",
    description: "",
    imageUrl: "",
    keywords: ""
  })

  const onChangeHandler = (e) =>{
    setValues(state => ({...state, [e.target.name]: e.target.value}))
  }

  const onSubmitHandler = async (e) =>{
    e.preventDefault()

    values.userId = userId

    const isValidData = itemValidationService(values)

    if(isValidData){

      
      const response = await createItem('POST', values, token)
      console.log("response")
      console.log(response)
      navigate("/articles/dashboard")
      
    } 

  }

  return (
    <>
      <div className="overlay">
        <div className="backdrop"></div>
        <div className="modal">
          <div className="user-container">
            <header className="headers">

              <h2>Create  article</h2>

            </header>


            <form className={styles["user-form"]} onSubmit = {onSubmitHandler}>


            
            <div className={styles["form-row"]}>

              <button className={styles["btn-close"]} type="button" onClick={onBackHangler}>
                X
              </button>
              
              <div className={styles["tumbnailpicture-frame"]}>
                <img className="tumbnailpicture-frame" src='https://static.thenounproject.com/png/4460304-200.png' alt='tumbnail icon'/>
              </div>

                <div className={styles["form-group"]}>
                  <label htmlFor="firstName">Title</label>
                  <div className="input-wrapper">

                    <input className={styles["form-input"]} id="title" name="title" type="text" onChange={onChangeHandler} value={values.title}/>
                  </div>
                </div>


                

                


              <div className={styles["form-group"]}>
                  <label htmlFor="email">Description</label>
                  <div className="input-wrapper">
 
                    <input className={styles["form-input"]} id="description" name="description" type="text" onChange={onChangeHandler} value={values.description} />
                  </div>
                </div>

                <div className={styles["form-group"]}>
                  <label htmlFor="firstName">ImageUrl</label>
                  <div className="input-wrapper">

                    <input className={styles["form-input"]} id="imageUrl" name="imageUrl" type="text" onChange={onChangeHandler} value={values.imageUrl} />
                  </div>
                </div>

                <div className={styles["form-group"]}>
                  <label htmlFor="Passowrd">keywords to describe video</label>
                  <div className="input-wrapper">

                    <input className={styles["form-input"]} id="keywords" name="keywords" type="text" onChange={onChangeHandler} value={values.keywords} placeholder="word1, word2, ... " />
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
          </div>
        </div>
      </div>
    </>
  );
};

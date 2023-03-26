import "./UserForms.css"

import {useState} from "react"


import {createItem} from "../service/itemsService"
import {useNavigate} from "react-router-dom"

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { NavContext } from "../contexts/NavContext";

import { itemValidationService } from "../service/itemValidationService";
import { toast } from "react-toastify";


export const ItemCreate = () => {
  const {navigate, onBackHangler} = useContext(NavContext)


  const {userId} = useContext(AuthContext)

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

      
      const response = await createItem('POST', values)
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


            <form className="user-form" onSubmit = {onSubmitHandler}>

              <div className="form-error">
                <p>Last name should be at least 3 characters long!</p>
              </div>

            
                <div className="form-row">

              <button className="btn-close" type="button" onClick={onBackHangler}>
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
                    <input className="form-input" id="title" name="title" type="text" onChange={onChangeHandler} value={values.title}/>
                  </div>
                </div>


                

                


              <div className="form-group">
                  <label htmlFor="email">Description</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input className="form-input" id="description" name="description" type="text" onChange={onChangeHandler} value={values.description} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="firstName">ImageUrl</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <input className="form-input" id="imageUrl" name="imageUrl" type="text" onChange={onChangeHandler} value={values.imageUrl} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="Passowrd">keywords to describe video</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input className="form-input" id="keywords" name="keywords" type="text" onChange={onChangeHandler} value={values.keywords} />
                  </div>
                </div>

                


                <div id="form-actions">
                <button id="action-save" className="btn" type="submit">
                  Save
                </button>
                <button id="action-cancel" className="btn" type="button" onClick={onBackHangler}>
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

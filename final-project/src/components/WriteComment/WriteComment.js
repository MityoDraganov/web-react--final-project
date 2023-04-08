import styles from "./WriteCommet.module.css"

import { useState } from "react"
import {useParams} from "react-router-dom"

import { useContext } from "react";
import { NavContext } from "../../contexts/NavContext";
import { postComment } from "../../service/commentSerivce";
import { AuthContext } from "../../contexts/AuthContext";

export const WriteComment = () => {
    const {id} = useParams()

    const {navigate, onBackHangler} = useContext(NavContext)
    const {userId} = useContext(AuthContext)

    const [values, setValues] = useState({
      message: ''
    })

    const onChangeHandler = (e) => {
      setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    const onSubmitHandler = async (e) => {
      e.preventDefault()

      values.userId = userId

      const response = await postComment(values, id)
      console.log(response)

      onBackHangler()
    }

    return(
        <>
        <div className="modal">
          <div className="user-container">
            <header className="headers">

              <h2>Write Comment</h2>

            </header>


            <form className={styles["user-form"]} onSubmit = {onSubmitHandler}>


            
            <div className={styles["form-row"]}>

              <button className={styles["btn-close"]} type="button" onClick={onBackHangler}>
                X
              </button>

                <div className="form-group">
                  <label htmlFor="firstName">Message</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <input className={styles["form-input"]} id="message" name="message" type="text" onChange={onChangeHandler} value={values.message}/>
                  </div>
                </div>




                <div id="form-actions">
                <button id="action-save" className={styles["btn"]} type="submit">
                  Post
                </button>
                <button id="action-cancel" className={styles["btn"]} type="button" onClick={onBackHangler}>
                  Cancel
                </button>
              </div>
              </div>





            </form>
          </div>
        </div>
        </>
    )
}
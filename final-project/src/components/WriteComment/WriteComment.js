import { useState } from "react"

import { useContext } from "react";
import { NavContext } from "../../contexts/NavContext";


export const WriteComment = () => {
    const {navigate, onBackHangler} = useContext(NavContext)

    const [values, setValues] = useState({

    })

    const onChangeHandler = () => {

    }

    const onSubmitHandler = () =>{

    }

    return(
        <>
        <div className="modal">
          <div className="user-container">
            <header className="headers">

              <h2>Write Comment</h2>

            </header>


            <form className="user-form" onSubmit = {onSubmitHandler}>


            
                <div className="form-row">

              <button className="btn-close" type="button" onClick={onBackHangler}>
                X
              </button>

                <div className="form-group">
                  <label htmlFor="firstName">Message</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <input className="form-input" id="title" name="title" type="text" onChange={onChangeHandler} value={values.title}/>
                  </div>
                </div>


                

                


              
                


                <div id="form-actions">
                <button id="action-save" className="btn" type="submit">
                  Post
                </button>
                <button id="action-cancel" className="btn" type="button" onClick={onBackHangler}>
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
import "./UserForms.css"
import { useState } from "react";
import { userLogin } from "../service/formFetchService";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { NavContext } from "../contexts/NavContext";


export const UserLogin = () =>{
    const {setAuth} = useContext(AuthContext)
    const {navigate, onBackHangler} = useContext(NavContext)

    const [values, setValues]= useState({
      email: '',
      password: '',
    })


    const onChangeHandler = (e) =>{
      setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    const onSubmitHandler = async (e) =>{
      e.preventDefault()
      const data = await userLogin(values)
      console.log('data')
      console.log(data)

      localStorage.setItem("token", data.token)
      setAuth(state => ({...state, token: data.token, _id: data._id}))
      
      onBackHangler()
    }

    return(

    <>
      <div className="overlay">
        <div className="backdrop"></div>
        <div className="modal">
          <div className="user-container">
            <header className="headers">

              <h2>Login</h2>

            </header>


            <form className="user-form" onSubmit={onSubmitHandler}>


              <div className="form-error">
                <p>Last name should be at least 3 characters long!</p>
              </div>

            
                <div className="form-row">

              <button className="btn-close" onClick={onBackHangler} type="button">
                X
              </button>



              <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input className="form-input" id="email" name="email" type="email" onChange={onChangeHandler} value={values.email}/>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Password</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input className="form-input" id="password" name="password" type="password" onChange={onChangeHandler} value={values.password}/>
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
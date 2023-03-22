import './UserForms.css'
import {useState, useEffect} from 'react'
import { userCreate } from '../service/formFetchService';
import {Link, useNavigate} from 'react-router-dom'


import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const UserCreate = ({backingFunc}) => {

  const {setAuth} = useContext(AuthContext) 
  
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    imageUrl: '',
    email: '',
    password: '',
    rePassword: '',
  })




  const onChangeHandler = (e) =>{
    setValues(state => ({...state, [e.target.name]: e.target.value}))
  }


  const onSubmitHandler = async (e) =>{
    e.preventDefault()
    

    const data = await userCreate(values)

    console.log(data)
    localStorage.setItem("token", data.token)

    setAuth(state => ({...state, token: data.token, _id: data._id}))
  
  }



  return (
    <>
      
        
        
          <div className="user-container">
            <header className="headers">

              <h2>Register</h2>

            </header>


            <form className="user-form"  onSubmit = {onSubmitHandler}>

              <div className="form-error">
                <p>Last name should be at least 3 characters long!</p>
              </div>

            
                <div className="form-row">

              <button className="btn-close" type="button" onClick={backingFunc}>
                X
              </button>

              <div className="profilepicture-wraper">
                <img className="profilepicture-frame" src='https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg' />
              </div>

                <div className="form-group">
                  <label htmlFor="firstName">First name</label>
                  <div className="input-wrapper">
                    <input className="form-input" id="firstName" name="firstName" type="text" onChange={onChangeHandler} value={values.firstName} />
                  </div>
                </div>


                <div className="form-group">
                  <label htmlFor="lastName">Last name</label>
                  <div className="input-wrapper">
                    <input className="form-input" id="lastName" name="lastName" type="text" onChange={onChangeHandler} value={values.lastName} />
                  </div>
                </div>

                <div className="form-group">
                <label htmlFor="imageUrl">Image Url</label>
                <div className="input-wrapper">
                  <input className="form-input" id="imageUrl" name="imageUrl" type="text"  onChange={onChangeHandler} value={values.imageUrl} />
                </div>
              </div>


              <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <input className="form-input" id="email" name="email" type="text" onChange={onChangeHandler} value={values.email} />
                  </div>
                </div>


                <div className="form-group">
                  <label htmlFor="Passowrd">Passowrd</label>
                  <div className="input-wrapper">

                    <input className="form-input" id="password" name="password" type="password" onChange={onChangeHandler} value={values.password} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="RePassword">Repeat Password</label>
                  <div className="input-wrapper">
                    <input className="form-input" id="rePassword" name="rePassword" type="password" value={values.rePassword} onChange={onChangeHandler} />
                  </div>
                </div>


                <div id="form-actions">
                <button id="action-save" className="btn" type="submit">
                  Save
                </button>
                <button id="action-cancel" className="btn" type="button" onClick={backingFunc}>
                  Cancel
                </button>
              </div>
              </div>
            </form>
          </div>
        
      
    </>
  );
};

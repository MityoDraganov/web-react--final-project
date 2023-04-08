import styles from './UserCreate.module.css';


import {useState} from 'react'
import { userCreate } from '../../service/formFetchService';



import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { NavContext } from "../../contexts/NavContext";
import { toast } from "react-toastify"


export const UserCreate = () => {

  const {setAuth} = useContext(AuthContext) 
  const { onBackHangler} = useContext(NavContext)
  
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
    
    if(values.firstName.length < 3  || values.lastName.length < 3){
      toast("First name and Last name should be at least 3 characters long each and contain only letters!")
      return
    }

    if(values.email.length < 3){
      toast("Email should be at 3 characters long")
      return
    }

    if(values.imageUrl.length < 3){
      toast("ImageUrl shoulb be at least 3 characters long")
      return
    }


    if(values.password !== values.rePassword){
      toast("Passwords do not match")
      return
    }

    if(values.password.length < 6){
      toast("Password must be at least 6 digits long")
      return
    }




    const data = await userCreate(values)

    console.log(data)
    localStorage.setItem("user", JSON.stringify(data))

    setAuth(state => ({...state, token: data.token, _id: data._id}))

    onBackHangler()
  
  }



  return (
    <>
        <header className={styles.headers}>
          <h2>Register</h2>
        </header>
  
        <form className={styles["user-form"]} onSubmit={onSubmitHandler}>

  
          <div className={styles["form-row"]}>
            <button className={styles["btn-close"]} type="button" onClick={onBackHangler}>
              X
            </button>
  
            <div className={styles.profilePictureWrapper}>
              <img className={styles["profilepicture-frame"]} src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" alt="Profile" />
            </div>
  
            <div className={styles["form-group"]}>
              <label htmlFor="firstName">First name</label>
              <div className={styles["input-wrapper"]}>
                <input className={styles["form-input"]} id="firstName" name="firstName" type="text" onChange={onChangeHandler} value={values.firstName} />
              </div>
            </div>
  
            <div className={styles["form-group"]}>
              <label htmlFor="lastName">Last name</label>
              <div className={styles["input-wrapper"]}>
                <input className={styles["form-input"]} id="lastName" name="lastName" type="text" onChange={onChangeHandler} value={values.lastName} />
              </div>
            </div>
  
            <div className={styles["form-group"]}>
              <label htmlFor="imageUrl">Image Url</label>
              <div className={styles["input-wrapper"]}>
                <input className={styles["form-input"]} id="imageUrl" name="imageUrl" type="text" onChange={onChangeHandler} value={values.imageUrl} />
              </div>
            </div>
  
            <div className={styles["form-group"]}>
              <label htmlFor="email">Email</label>
              <div className={styles["input-wrapper"]}>
                <input className={styles["form-input"]} id="email" name="email" type="text" onChange={onChangeHandler} value={values.email} />
              </div>
            </div>
  
            <div className={styles["form-group"]}>
              <label htmlFor="Passowrd">Password</label>
              <div className={styles["input-wrapper"]}>
                <input className={styles["form-input"]} id="password" name="password" type="password" onChange={onChangeHandler} value={values.password} />
              </div>
            </div>
  
            <div className={styles["form-group"]}>
              <label htmlFor="RePassword">Repeat Password</label>
              <div className={styles["input-wrapper"]}>
                <input className={styles["form-input"]} id="rePassword" name="rePassword" type="password" value={values.rePassword} onChange={onChangeHandler} />
              </div>
            </div>
  
            <div id="form-actions">
              <button id="action-save" className={styles.btn} type="submit">
                Save
              </button>
              <button id="action-cancel" className={styles.btn} type="button" onClick={onBackHangler}>
                Cancel
              </button>
            </div>
          </div>
        </form>

    </>
  );
  
};

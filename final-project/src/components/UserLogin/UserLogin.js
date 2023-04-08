import styles from "./UserLogin.module.css";
import { useState } from "react";
import { userLogin } from "../../service/formFetchService";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { NavContext } from "../../contexts/NavContext";
import {toast} from "react-toastify"

export const UserLogin = () =>{
  const {setAuth} = useContext(AuthContext)
  const {onBackHangler} = useContext(NavContext)

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
    if(data.error){
      toast(data.error)
      return
    }
    console.log('data')
    console.log(data)

    localStorage.setItem("user", JSON.stringify(data))
    setAuth(state => ({...state, token: data.token, _id: data._id}))
    
    onBackHangler()
  }

  return(
    <>

          
            <header className={styles.headers}>
              <h2>Login</h2>
            </header>
            <form className={styles["user-form"]} onSubmit={onSubmitHandler}>
              <div className={styles["form-row"]}>
                <button className={styles["btn-close"]} onClick={onBackHangler} type="button">X</button>

                
                <div className={styles["form-group"]}>
                  <label htmlFor="email">Email</label>
                  <div className={styles["input-wrapper"]}>
                    <input className={styles["form-input"]} id="email" name="email" type="email" onChange={onChangeHandler} value={values.email}/>
                  </div>
                </div>


                <div className={styles["form-group"]}>
                  <label htmlFor="email">Password</label>
                  <div className={styles["input-wrapper"]}>
                    <input className={styles["form-input"]} id="password" name="password" type="password" onChange={onChangeHandler} value={values.password}/>
                  </div>
                </div>


                <div id="form-actions">
                  <button id="action-save" className={styles.btn} type="submit">Save</button>
                  <button id="action-cancel" className={styles.btn} type="button" onClick={onBackHangler}>Cancel</button>
                </div>
              </div>
            </form>
    </>
  );
};

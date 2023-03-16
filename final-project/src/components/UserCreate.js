import './UserForms.css'
import {useState, useEffect} from 'react'
import { userHandler } from '../service/formFetchService';



export const UserCreate = () => {


  
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    imageUrl: '',
    email: '',
    password: '',
    rePassword: '',
  })

  const onChangeHandler = (e) =>{
    //console.log('change');
    const componentName = e.target.name
    //console.log(componentName)
    const componentValue = e.target.value
    //console.log(componentValue);
    setValues(state => ({...state, [componentName]: [componentValue]}))
  }


  const onSubmitHandler = async (e) =>{
    e.preventDefault()
    console.log(e.target)
    const formData = new FormData(e.target)
    
    
    const {firstName, lastName, imageUrl, email, password} = Object.fromEntries(formData.entries())
    
    const body = {
      firstName: firstName,
      lastName: lastName,
      imageUrl: imageUrl,
      email: email,
    }
    console.log('body')
    console.log(body)
    console.log('body')
    /*
    console.log('body')
    console.log(body)
    const response = await userHandler('POST', body)
    console.log(response)
    */

    const response = await fetch('http://localhost:3030/users'
    ,{
      method: "POST",
      body: JSON.stringify(body),
      headers:{
          'Content-type': 'application/json'
      }
  })
  const data = await response.json()
  console.log(data)
  }

  return (
    <>
      <div className="overlay">
        <div className="backdrop"></div>
        <div className="modal">
          <div className="user-container">
            <header className="headers">

              <h2>Register</h2>

            </header>


            <form className="user-form" onChange={onChangeHandler} onSubmit = {onSubmitHandler}>

              <div className="form-error">
                <p>Last name should be at least 3 characters long!</p>
              </div>

            
                <div className="form-row">

              <button className="btn-close" type="button">
                X
              </button>

              <div className="profilepicture-wraper">
                <img className="profilepicture-frame" src='https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg' />
              </div>
                <div className="form-group">
                  <label htmlFor="firstName">First name</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <input className="form-input" id="firstName" name="firstName" type="text" />
                  </div>
                </div>


                <div className="form-group">
                  <label htmlFor="lastName">Last name</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <input className="form-input" id="lastName" name="lastName" type="text" />
                  </div>
                </div>

                <div className="form-group long-line">
                <label htmlFor="imageUrl">Image Url</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-image"></i>
                  </span>
                  <input className="form-input" id="imageUrl" name="imageUrl" type="text"  />
                </div>
              </div>


              <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input className="form-input" id="email" name="email" type="text" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="Passowrd">Passowrd</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input className="form-input" id="password" name="password" type="text" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="RePassword">Repeat Password</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input className="form-input" id="rePassword" name="rePassword" type="text" />
                  </div>
                </div>


                <div id="form-actions">
                <button id="action-save" className="btn" type="submit">
                  Save
                </button>
                <button id="action-cancel" className="btn" type="button">
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

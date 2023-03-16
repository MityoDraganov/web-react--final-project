import "./UserForms.css"

import {createItem} from "../service/itemsService"

export const ItemCreate = ({backingFunc}) => {


  const onSubmitHandler = async (e) =>{
    e.preventDefault()
    console.log(e.target)

    const formData = new FormData(e.target)
    const {title, description, imageUrl, keywords} = Object.fromEntries(formData.entries())
    
    const body = {
      title,
      description,
      imageUrl,
      keywords
    }

    const response = await createItem('POST', body)
    console.log(response)
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

              <button className="btn-close" onClick={backingFunc}>
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
                    <input className="form-input" id="title" name="title" type="text" />
                  </div>
                </div>


                

                


              <div className="form-group">
                  <label htmlFor="email">Description</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input className="form-input" id="description" name="description" type="text" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="firstName">ImageUrl</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <input className="form-input" id="imageUrl" name="imageUrl" type="text" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="Passowrd">keywords to describe video</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input className="form-input" id="keywords" name="keywords" type="text" />
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
        </div>
      </div>
    </>
  );
};

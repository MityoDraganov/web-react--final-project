import "./UserForms.css"

export const UserLogin = ({backingFunc}) =>{

    return(

    <>
      <div className="overlay">
        <div className="backdrop"></div>
        <div className="modal">
          <div className="user-container">
            <header className="headers">

              <h2>Login</h2>

            </header>


            <form className="user-form">


              <div className="form-error">
                <p>Last name should be at least 3 characters long!</p>
              </div>

            
                <div className="form-row">

              <button className="btn-close" onClick={backingFunc} type="button">
                X
              </button>



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
                  <label htmlFor="email">Password</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input className="form-input" id="email" name="email" type="password" />
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
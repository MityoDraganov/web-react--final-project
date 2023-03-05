import './UserCreate.css'

export const UserCreate = () => {
  return (
    <>
      <div className="overlay">
        <div className="backdrop"></div>
        <div className="modal">
          <div className="user-container">
            <header className="headers">

              <h2>Edit User/Add User</h2>
              <button className="btn close">
                X
              </button>

            </header>


            <form className="user-form">

              <div className="form-error">
                <p>Last name should be at least 3 characters long!</p>
              </div>

            
                <div className="form-row">

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
                  <input className="form-input" id="imageUrl" name="imageUrl" type="text" />
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

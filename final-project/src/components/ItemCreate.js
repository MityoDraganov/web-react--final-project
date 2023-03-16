import './UserForms.css'

export const ItemCreate = ({backingFunc}) => {
  return (
    <>
      <div className="overlay">
        <div className="backdrop"></div>
        <div className="modal">
          <div className="user-container">
            <header className="headers">

              <h2>Create / Edit video</h2>

            </header>


            <form className="user-form">

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
                  <label htmlFor="firstName">Video title</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <input className="form-input" id="firstName" name="firstName" type="text" />
                  </div>
                </div>


                <div className="form-group">
                  <label htmlFor="lastName">Video Url</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <input className="form-input" id="lastName" name="lastName" type="text" />
                  </div>
                </div>

                <div className="form-group long-line">
                <label htmlFor="imageUrl">Video Tumbnail Url</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-image"></i>
                  </span>
                  <input className="form-input" id="imageUrl" name="imageUrl" type="text" />
                </div>
              </div>


              <div className="form-group">
                  <label htmlFor="email">Video description</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input className="form-input" id="email" name="email" type="text" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="Passowrd">keywords to describe video</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input className="form-input" id="password" name="password" type="text" />
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

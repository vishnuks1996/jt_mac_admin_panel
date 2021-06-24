import React from 'react'
import { Link } from 'react-router-dom'

/**
* @author
* @function ForgotPassword2
**/

const ForgotPassword2 = (props) => {
  return(
<div className=" page_padding"> {/*  page start */}
  {/* section1 starts */}
  <section className="section1 pb-5">
    <div className="title bg_green py-3 mb-5">
      <div className="container d-flex">
        <h3 className="text-white m-0"><strong>Reset Password</strong></h3>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-floating mb-2">
            <input type="text" className="form-control" id="pass" required placeholder="********" />
            <label htmlFor="pass">Enter New Password</label>
          </div>
          <div className="form-floating mb-2">
            <input type="password" className="form-control" id="cpass" required placeholder="********" />
            <label htmlFor="cpass">Confirm New Password</label>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-6 text-end">
          <a href="admin-login.html" className><button className="shadow border-0 bg_yellow text-white btn_primary rounded-pill"> Save<i className="fas fa-chevron-right bg-white color_yellow" /></button></a>
        </div>
      </div>
    </div>
  </section>
  {/* section1 end */}
  <hr />
</div> 


   )

 }

export default ForgotPassword2
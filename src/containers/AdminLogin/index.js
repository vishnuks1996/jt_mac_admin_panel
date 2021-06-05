import React from 'react'
import './style.css';
import { Link } from 'react-router-dom'

/**
* @author
* @function AdminLogin
**/

const AdminLogin = (props) => {
  return(
    <div className="admin_login_page page_padding"> {/* admin login page start */}
        {/* section1 starts */}
        <section className="section1 pb-5">
          <div className="title bg_green py-3 mb-5">
            <div className="container d-flex">
              <h3 className="text-white m-0"><strong>Admin Login</strong></h3>
            </div>
          </div>
          <div className="container">
            <div className="content p-5 rounded-3">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="username" placeholder="username" />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-floating mb-2">
                <input type="password" className="form-control" id="pass" placeholder="**********" />
                <label htmlFor="pass">Password</label>
              </div>
              {/* <a href="" class="float-end text-white">Forgot Password?</a> */}
              <Link to={'/admindashboard'}><div className="text-end w-100 d-inline-block"><button className="shadow border-0 bg_yellow text-white btn_primary rounded-pill mt-3"> Sign In<i className="fas fa-user-tie bg-white color_yellow" /></button></div></Link>
            </div>
          </div>
        </section>
        {/* section1 end */}
        <hr />
      </div> /* admin login end */
   )

 }

export default AdminLogin
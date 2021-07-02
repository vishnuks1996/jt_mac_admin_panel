import React, { useRef, useState } from 'react'
import './style.css';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom";
import { Alert } from "react-bootstrap"
import { login } from "../../actions"

/**
* @author
* @function AdminLogin
**/

const AdminLogin = (props) => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (emailRef.current.value === '') {
      setError('Username is required')
      return;
    }
    if (passwordRef.current.value === '') {
      setError('password is required')
      return;
    }
    dispatch(login(emailRef.current.value, passwordRef.current.value))
    if(auth.error && !auth.loading){
      setError('User namae or password is incorrect')
    }
  }

  if (auth.authenticate) {
    return <Redirect to={`/admindashboard`} />;
  }


  return (
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
          {(error && !auth.loading ? (<Alert variant="danger">{error}</Alert>): null)}
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" ref={emailRef} id="username" placeholder="username" />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-floating mb-2">
                <input type="password" className="form-control" ref={passwordRef} id="pass" placeholder="**********" />
                <label htmlFor="pass">Password</label>
              </div>

              <Link to={'/forgotpassword1'}><div class="float-end text-white">Forgot Password?</div></Link>
              {/* <Link to={'/admindashboard'}><div className="text-end w-100 d-inline-block"><button  className="shadow border-0 bg_yellow text-white btn_primary rounded-pill mt-3"> Sign In<i className="fas fa-user-tie bg-white color_yellow" /></button></div></Link> */}
              <div className="text-end w-100 d-inline-block">
              

               {(!auth.loading  ? (<button className="shadow border-0 bg_yellow text-white btn_primary rounded-pill mt-3"> Sign In<i className="fas fa-user-tie bg-white color_yellow" /></button>): <div class="spinner-border spinner-border-sm text-warning my-1 mx-2 " role="status">
                <span class="visually-hidden">Loading...</span>
              </div>)} </div>
            </form>
          </div>
        </div>
      </section>
      {/* section1 end */}
      <hr />
    </div> /* admin login end */
  )

}

export default AdminLogin
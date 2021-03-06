import React, { useRef, useState } from 'react'
import { Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { auth } from '../../firebase'

/**
* @author
* @function ForgotPassword1
**/

const ForgotPassword1 = (props) => {
  const emailRef = useRef()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)


  const handileSubmit = async () => {
    try {
      setMessage("")
      setError("")
      setLoading(true)
      await auth.sendPasswordResetEmail(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch (error) {
      setError("Failed to reset password")
    }
    setLoading(false)
  }

  return (
    <div className="page_padding"> {/*  page start */}
      {/* section1 starts */}
      <section className="section1 pb-5">
        <div className="title bg_green py-3 mb-5">
          <div className="container d-flex">
            <h3 className="text-white m-0"><strong>Forgot Password?</strong></h3>
          </div>
        </div>
        <div className="container">       
          <div className="row justify-content-center">
            <div className="col-md-6">
            {error && <Alert style={{textAlign: 'center'}} variant="danger">{error}</Alert>}
          {message && <Alert style={{textAlign: 'center'}} variant="success">{message}</Alert>}
              <p className="m-0">Please enter your email address</p><p>we will send you an email with password reset link.</p>
              <div className="form-floating mb-2">
                <input type="email" className="form-control" id="mail" ref={emailRef} required placeholder="emailaddress@gmail.com" />
                <label htmlFor="mail">Enter Email Address</label>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-md-6 text-end">
              <button className="shadow border-0 bg_yellow text-white btn_primary rounded-pill" onClick={handileSubmit}> Reset Password<i className="fas fa-chevron-right bg-white color_yellow" /></button>
            </div>
            <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
          </div>
        </div>
      </section>
      {/* section1 end */}
      <hr />
    </div>

  )

}

export default ForgotPassword1
import React, { useRef, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { changePassword as changePasswordAction } from '../../actions'

/**
* @author
* @function ChangePassword
**/

const ChangePassword = (props) => {
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const auth = useSelector(state => state.auth)
  const [error, setError] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = () => {
    setError("")
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    dispatch(changePasswordAction(passwordRef.current.value))

  }


  return (
    <div className=" page_padding"> {/*  page start */}
      {/* section1 starts */}
      <section className="section1 pb-5">
        <div className="title bg_green py-3 mb-5">
          <div className="container d-flex">
            <h3 className="text-white m-0"><strong>Change Password</strong></h3>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 bg-light border rounded-3 p-4">
            {error && <Alert style={{textAlign: 'center'}} variant="danger">{error}</Alert>}
              <div className="form-floating mb-2">
                <input type="password" className="form-control" id="pass" ref={passwordRef} required placeholder="********" />
                <label htmlFor="pass">Enter New Password</label>
              </div>
              <div className="form-floating mb-2">
                <input type="password" className="form-control" id="cpass" ref={passwordConfirmRef} required placeholder="********" />
                <label htmlFor="cpass">Confirm New Password</label>
              </div>
              <div className="w-100 pt-2 text-end">
              {(!auth.loading ? (<button className="shadow border-0 bg_yellow text-white btn_primary rounded-pill" onClick={handleSubmit}> Save<i className="fas fa-chevron-right bg-white color_yellow" /></button>) : (
                <div class="spinner-border spinner-border-sm text-warning my-1 mx-2 " role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              ))}
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* section1 end */}
      <hr />
    </div>


  )

}

export default ChangePassword
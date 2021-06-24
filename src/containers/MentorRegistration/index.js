import React, { useState } from 'react'
import { Button, Modal, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import axios from '../../helpers/axios'

/**
* @author
* @function MentorRegistration
**/

const MentorRegistration = (props) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [locations, setLocations] = useState("");
  const [specialisations, setSpecialisations] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData();
    form.append('fullName', fullName);
    form.append('phoneNumber', phoneNumber);
    form.append('email', email);
    form.append('address', address);
    form.append('locations', locations);
    form.append('specialisations', specialisations);
    form.append('profileImage', profileImage);
    
    try {
      const res = await axios.post(`user/mentor_regisrartion`, form)
      if (res.status === 201) {
        setShow(true)
        setFullName('');
        setPhoneNumber('');
        setEmail('');
        setAddress('');
        setLocations('');
        setProfileImage('');
        setSpecialisations('')
        setError('')

      }
    } catch (error) {
      console.log(error.response.data)
      setError(error.response.data.error)

    }
  }

  const handleClose = () => {
    setShow(false);
  };

  const handleProfileImage = (e) => {
    setProfileImage(e.target.files[0]);
  }

  // const addLocation = () => {
  //   setDLocations([...dlocations, <div className="form-floating mb-2 ">
  //   <input type="text" className="form-control" id="location" value={locations} onChange={(e) => setLocations(e.target.value)} required placeholder="Thrissur" />
  // </div>])
  // }

  // const addspecification = () => {
  //   setSpecifications([...specifications,
  //   <div className="form-floating mb-2 specification_div">
  //     <input type="text" className="form-control" id="specification" value={locations} onChange={(e) => setLocations(e.target.value)} required placeholder="specification" />
  //     <label htmlFor="specification">Your specification</label>
  //   </div>])
  // }

  return (
    <>
      <div className=" page_padding"> {/*  page start */}
        {/* section1 starts */}
        <section className="section1 pb-5">
          <div className="title bg_green py-3 mb-5">
            <div className="container d-flex">
              <h3 className="text-white m-0"><strong>Register as a Mentor</strong></h3>
            </div>
          </div>
          <div className="container">
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="form-floating mb-2">
                  <input type="text" className="form-control" id="name" value={fullName} onChange={(e) => setFullName(e.target.value)} required placeholder="John Snow" />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="form-floating mb-2">
                  <input type="number" className="form-control" maxLength={13} id="phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required placeholder="+91 9525252525" />
                  <label htmlFor="phone">Phone Number</label>
                </div>
                <div className="form-floating mb-2">
                  <input type="email" className="form-control" id="mail" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="John@gmail.com" />
                  <label htmlFor="mail">Email Address</label>
                </div>
                <div className="form-floating mb-2">
                  <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required placeholder="John Snow" />
                  <label htmlFor="address">Address</label>
                </div>
                <div className="location_div">
                  <div className="form-floating mb-2 ">
                    <input type="text" className="form-control" id="location" value={locations} onChange={(e) => setLocations(e.target.value)} required placeholder="Thrissur" />
                    <label htmlFor="location">Locations you are Available</label>
                  </div>
                  
                </div>
                <div className="specification_div">
                  <div className="form-floating mb-2 specification_div">
                    <input type="text" className="form-control" id="specialisations" value={specialisations} onChange={(e) => setSpecialisations(e.target.value)} required placeholder="specialisations" />
                    <label htmlFor="specialisations">Your specialisations</label>
                  </div>
                </div>
                <div className="form-floating mb-2">
                  <input type="file" className="form-control" id="pic" name="productPicture" required placeholder="Upload Photo" onChange={handleProfileImage} />
                  <label htmlFor="pic">Upload Photo</label>
                </div>
                {/* <input type="file" value={profileImage} name="productPicture" onChange={handleProfileImage} /> */}
                {/* <div className="form-floating mb-2">
                  <input type="text" className="form-control" id="pass" required placeholder="********" />
                  <label htmlFor="pass">Account Password</label>
                </div>
                <div className="form-floating mb-2">
                  <input type="password" className="form-control" id="cpass" required placeholder="********" />
                  <label htmlFor="cpass">Confirm Password</label>
                </div> */}
              </div>
            </div>
            <div className="row justify-content-center mt-3">
              <div className="col-md-6 text-end">
                <a href="admin-login.html" className><button className="shadow border-0 bg_yellow text-white btn_primary rounded-pill" onClick={handleSubmit}> Save<i className="fas fa-chevron-right bg-white color_yellow" /></button></a>
              </div>
            </div>
          </div>

        </section>
        {/* section1 end */}
        <hr />
      </div>
      <Modal show={show}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>You are regisration successfully completed. You will receive a conformation email from the admin shortly</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal >
    </>



  )

}

export default MentorRegistration
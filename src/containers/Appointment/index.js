import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import moment from 'moment';
import axios from '../../helpers/axios'
import { useHistory } from "react-router-dom"

/**
* @author
* @function Appointment
**/

const Appointment = (props) => {
 const {id} = useParams()
 const [mentor, setMentor] = useState('')
 const [locations, setLocations] = useState([])
 const [specialisations, setSpecialisations] = useState([])
 const [slots, setSlots] = useState([])
 const [fullName, setFullName] = useState('')
 const [mobileNumber, setMobileNumber] = useState('')
 const [email, setEmail] = useState('')
 const [locationId, setLocationId] = useState('')
 const [address, setAddress] = useState('')
 const [date, setDate] = useState('')
 const [error, setError] = useState('')
 const [specialNeeds, setSpecialNeeds] = useState('')
 const [type, setType] = useState('')
 const [SlotId, setSlotId] = useState('')
 const [SpecialisationId, setSpecialisationId] = useState('')
 const history = useHistory()



 useEffect(async () => {
   try {
     const res = await axios.get(`client/get_appointment_form/${id}`)
     if (res.status === 200) {
       let mtr = res.data.mentor
       setMentor(mtr)
       setLocations(mtr.Locations)
       setSpecialisations(mtr.Specialisations)
       setSlots(mtr.Slots)

     }
   } catch (error) {
     console.log(error)
   }
 }, [])

 const handleSubmit = async () => {
  setError("")
   const client = {
    "fullName": fullName,
    "mobileNumber": mobileNumber,
    "email": email,
    "address": address,
    "specialNeeds": specialNeeds,
    "type": type,
    "slotId": SlotId,
    "SpecialisationId": SpecialisationId,
   }
   try {
    const res = await axios.post(`client/book_appointment`, {client})
    if (res.status === 200) {
      setFullName("")
      setSpecialisationId("")
      setMobileNumber("")
      setEmail("")
      setAddress("")
      setSpecialNeeds("")
      setType("")
      setSlotId("")
      setDate("")
      setLocationId("")
      history.push(`/payment1`)
    }
   } catch (err) {
    setError(err.response.error)
    console.log('err', err)
   }
 }

  return(
    <div className="appointment_page page_padding"> {/* appointment page start */}
    {/* section1 starts */}
    <section className="section1 pb-5">
      <div className="title bg_green py-3 mb-5">
        <div className="container d-flex">
          <h3 className="text-white m-0"><strong>Book An Appointment (Session)</strong></h3>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
           <div className="form-floating mb-3">
              <input type="name" className="form-control" value={fullName} onChange={(e) => setFullName(e.target.value)} id="name" placeholder="Arun K D" />
              <label htmlFor="name">Full Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="number" className="form-control" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} id="phone" placeholder="+91 3232323232" />
              <label htmlFor="phone">Mobile Number</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
              <label htmlFor="address">Address</label>
            </div>
            <div className="form-floating mb-3">
              <select className="form-select" id="subject" value={SpecialisationId} onChange={(e) => setSpecialisationId(e.target.value)} aria-label="Subject / Issue">
                <option selected>Select Subject / Issue</option>
                {(specialisations.length > 0 ? specialisations.map(( specialisation, index ) => (
                  <option value={specialisation.id}>{specialisation.specialisation}</option>
                )): null)}
    
              </select>
              <label htmlFor="subject">Subject / Issue</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <select className="form-select" id="subject" value={type} onChange={(e) => setType(e.target.value)} aria-label="Choose Type">
                <option selected>Choose Type</option>
                
                <option value="Face to Face Consultation">Face to Face</option>
                <option value="audio Consultation">Audio Consultation</option>
                <option value="video Consultation">Video Consultation</option>
              </select>
              <label htmlFor="subject">Choose Type</label>
            </div>
            <div className="form-floating mb-3">
              <select className="form-select" id="location" onChange={(e) => setLocationId(e.target.value)} aria-label="Choose Location">
                <option selected>Choose Location</option>
                {(locations.length > 0 ? locations.map(( location, index ) => (
                  <option value={location.id}>{location.location}</option>
                )): null)}
        
              </select>
              <label htmlFor="location">Choose Location</label>
            </div>
            <div className="form-floating mb-3">
              <input type="date" className="form-control"  onChange={(e) => setDate(moment(e.target.value).format('DD/MM/YYYY'))} placeholder="Select Date" id="date"  />
              <label htmlFor="date">Select Date</label>
            </div>
            <div className="form-floating mb-3">
              <textarea className="form-control" placeholder="Leave a comment here" value={specialNeeds} onChange={(e) => setSpecialNeeds(e.target.value)} id="comment" defaultValue={""} />
              <label htmlFor="comment">Special Needs / Comment</label>
            </div>
          </div>
          <div className="col-md-12 slot_selection">
          <div className="">
            <div className="card h-100 bg-light shadow-sm rounded-3 p-3">
              <div className="card-body p-0">
              <h6 className="card-title fw-bold">{date}</h6>
              {(slots.length > 0) ? 
              slots.filter(slot => {
                if (slot.date == date && slot.LocationId == locationId){
                  return slot
                }}).map(slot =>(
                <div className="d-inline-block">
                  <input type="radio" className="btn-check"  value={slot.id} name="slot" onChange={(e) => setSlotId(e.target.value)} id="slot1" autoComplete="off" />
                  <label className="slot_check" htmlFor="slot1">{slot.fromTime}-{slot.toTime}</label>
                </div>
              )): <h2>No slot available in this date and location</h2>}
               
              </div>
            </div>
          </div>
          </div>
          <div className="text-end"><button onClick={handleSubmit} className="mt-3 shadow border-0 bg_yellow text-white btn_primary rounded-pill"> Get Appointment <i className="fas fa-chevron-right bg-white color_yellow" /></button></div>
        </div>
      </div>
    </section>
    {/* section1 end */ }
    <hr />
  </div> /* appointment page end */
   )

 }

export default Appointment
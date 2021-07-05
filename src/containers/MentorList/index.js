import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../helpers/axios'
import { generatePublicUrl } from '../../urlConfig'

/**
* @author
* @function MentorList
**/

const MentorList = (props) => {
  const [mentorList, setMentorsList] = useState([])

  useEffect( async () => {
    let mentors = []
    try {
      const res = await axios.get(`client/get_mentor_list`)
      if (res.status === 200) {
        mentors = [...res.data.mentors]
        setMentorsList(mentors)
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div className="page_mentorlist page_padding"> {/*  page start */}
      {/* section1 starts */}
      <section className="section1 pb-5">
        <div className="title bg_green py-3 mb-5">
          <div className="container d-flex">
            <h3 className="text-white m-0"><strong>Select a Mentor</strong></h3>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-0">
            {(mentorList.length > 0 ? mentorList.map( (mentor, index) => (
              <div className="col">
                
                  <div className="card h-100 bg-light shadow-sm rounded-3 p-3">
                  <img src={generatePublicUrl(mentor.Profile.profileImage)} alt="image" />
                  <div className="card-body px-0 pb-0">
                    <h6 className="card-title fw-bold">{mentor.fullName}</h6>
                    <div className="border rounded-3 p-2 mb-2">
                      {(mentor.Locations.length > 0 ? mentor.Locations.map((location, index) => (
                      <small className="bg-white rounded-pill p-1 m-1">{location.location} </small>
                      )): <small className="bg-white rounded-pill p-1 m-1">No location added </small> )}
                    </div>
                    <div className="border rounded-3 p-2 mb-2">
                    {(mentor.Specialisations.length > 0 ? mentor.Specialisations.map((specialisation, index) => (
                      <small className="bg-white rounded-pill p-1 m-1">{specialisation.specialisation} </small>
                      )): <small className="bg-white rounded-pill p-1 m-1"> No specialisation added </small> )}
                    </div>
                    <div className="form-floating mb-3">
              
                      <li className="bg-white rounded-pill p-1 m-1">Audio Consultation Fees: {mentor.Fee.audioConsultationFee} </li>
                      <li className="bg-white rounded-pill p-1 m-1">Face to Face Consultation Fees: {mentor.Fee.ftfConsultationFee} </li>
                      <li className="bg-white rounded-pill p-1 m-1">Video Consultation Fees: {mentor.Fee.videoConsultationFee} </li>
                      
                    </div>
                    <Link to={`/appointment/${mentor.id}`} ><button className="shadow border-0 float-end bg_yellow text-white btn_primary rounded-pill mt-1 mb-0"> Select<i className="fas fa-chevron-right bg-white color_yellow" aria-hidden="true" /></button></Link>
                  </div>
                </div>
               
                
              </div>
               )): null )}
            </div>
          </div>
        </div>
      </section>
      <hr />
    </div>




  )

}

export default MentorList;
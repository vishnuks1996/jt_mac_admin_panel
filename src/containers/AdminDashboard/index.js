import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import './style.css';
import { getInitialData } from '../../actions'
import { generatePublicUrl } from '../../urlConfig'
import DashboardHeader from '../../components/DashboardHeader';

/**
* @author
* @function AdminDashboard
**/

const AdminDashboard = (props) => {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth)
  const initialData = useSelector((state) => state.initialData)
  const [filterTerm, setFilterTerm] = useState("")

  // setDisplayAppointments([appointment.appointments])

  useEffect( () => {
    if (!auth.authenticating) {
      dispatch(getInitialData())
    }
  },[])

  return (
    <div className="admin_dashboard_page page_padding"> {/* admin dashboard page start */}
      {/* section1 starts */}
      <section className="section1 pb-5">
        <DashboardHeader 
          title='Admin Dashboard'
        />
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="content1 shadow rounded-3 p-3 d-flex align-items-center">
                <img src={auth.user.Profile ? generatePublicUrl(auth.user.Profile.profileImage): null} className="rounded-circle"  alt=""/>
                <h5>Welcome {auth.user.fullName}!</h5>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="content2 p-2 bg-light rounded-3">
                <div className="box shadow-sm rounded-3 p-2 bg_yellow d-flex justify-content-between align-items-baseline mb-3">
                  <h6 className="text-white">Total Appointments</h6>
                  <div className="count bg-white p-2 rounded-3 text-center"><strong>{initialData.appointments ? initialData.appointments.filter(appointment =>  appointment.date === moment(new Date()).format('DD/MM/YYYY') ).length : 0}</strong></div>
                </div>
                <div className="box shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-baseline mb-2">
                  <div>
                    <h6 className>Appointment Attended</h6>
                    <small><span className="me-2">Audio: {initialData.appointments.Client ? initialData.appointments.filter(appointment => appointment.attend === true && appointment.Client.type === 'Audio' && appointment.date === moment(new Date()).format('DD/MM/YYYY')).length : 0}</span> <span>Face to Face: {initialData.appointments.Client ? initialData.appointments.filter(appointment => appointment.attend === true && appointment.Client.type === 'Face to face' && appointment.date === moment(new Date()).format('DD/MM/YYYY')).length : 0}</span></small>
                  </div>
                  <div className="count bg_yellow p-2 rounded-3 text-center"><strong>{initialData.appointments ? initialData.appointments.filter(appointment => appointment.attend === true && appointment.date === moment(new Date()).format('DD/MM/YYYY') ).length : 0}</strong></div>
                </div>
                {/* <div className="box shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-baseline mb-2">
                  <div>
                    <h6 className>Appointment Cancelled</h6>
                    <small><span className="me-2">Audio: {appointment.appointments.Client? appointment.appointments.filter(appointment => appointment.Client.type === 'Audio').length : null}</span> <span>Face to Face: 5</span></small>
                  </div>
                  <div className="count bg-light p-2 rounded-3 text-center"><strong>10</strong></div>
                </div> */}
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="content3 p-2 bg-light rounded-3">
                <div className="box shadow-sm rounded-3 p-2 bg_yellow mb-3">
                  <h6 className="text-white">Consultation fees</h6>
                </div>
                <div className="box shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-baseline mb-2">
                  <h6 className>Payment done</h6>
                  <div className="count bg_yellow p-2 rounded-3 text-center"><strong>{initialData.appointments ? initialData.appointments.filter(appointment => appointment.payment === true && appointment.date === moment(new Date()).format('DD/MM/YYYY')).length : 0}</strong></div>
                </div>
                <div className="box shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-baseline mb-2">
                  <h6 className>Payment Pending</h6>
                  <div className="count bg_yellow p-2 rounded-3 text-center"><strong>{initialData.appointments ? initialData.appointments.filter(appointment => appointment.payment === false && appointment.date === moment(new Date()).format('DD/MM/YYYY')).length : 0}</strong></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="content4 p-2 bg-light rounded-3">
                <div className="box shadow-sm rounded-3 p-2 bg_yellow mb-3">
                  <h6 className="text-white">Income or Revenue Graph</h6>
                </div>
                <canvas id="myChart" width={400} height={400} />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="content5 p-2 bg-light rounded-3">
                <div className="box shadow-sm rounded-3 p-2 bg_yellow mb-3 d-flex justify-content-between align-items-baseline">
                  <h6 className="text-white">Available Slots</h6>
                  <select className="form-select" onClick={(e) => setFilterTerm(e.target.value)}>
                  <option value="">All</option>
                    {
                      initialData.locations.map(location => (
                        <option value={location.id}>{location.location}</option>
                      ))
                    }                  
                  </select>
                  <input type="date" className="form-control" id="address" placeholder="Address" onChange={(e) => setFilterTerm(moment(e.target.value).format('DD/MM/YYYY'))}/>
                </div>
                <div className="autoscroll">
                  {
                    initialData.appointments.length > 0 
                    ? initialData.appointments.filter(appointment =>{ if (filterTerm == ""){
                      return appointment
                    } else if  (appointment.LocationId == filterTerm ){
                      return appointment
                    }else if  (appointment.date == filterTerm ){
                      return appointment
                    }                    
                     }).map((appointment) => (
                      <div className="box slots shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-baseline mb-2">
                      <div className="p-1 rounded-2 text-center">{appointment.fromTime}-{appointment.toTime}</div>
                      <div className="p-1 rounded-3 text-center">{appointment.date}</div>
                      <div className="p-1 rounded-3 text-center">{appointment.Location.location}</div>
                      {(appointment.booked && !appointment.attend ? (<button className="bg-success text-white rounded-2 border-0 p-1 shadow">Attend</button>) : null)}
                      {(!appointment.booked ? (<div className="bg-dark text-white p-1 rounded-3 text-center">Not Booked</div>) : null)}
                      {(appointment.booked && appointment.attend ? (<div className="bg_yellow p-1 rounded-3 text-center">Attended</div>) : null)}
                  </div>
                    )): null

                  }
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-3">
            <div className="content5 p-2 bg-light rounded-3">
              <div className="box shadow-sm rounded-3 p-2 bg_yellow mb-3 d-flex justify-content-between align-items-baseline">
                <h6 className="text-white my-1">Mentors to be Approved</h6>
              </div> 
              <div className="autoscroll">
                {initialData.mentorRequests.length > 0 ? initialData.mentorRequests.map(mentor => (
                  <div className="box mentor shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-center mb-2">
                  <div className="p-1 rounded-2 text-center"><strong>{mentor.fullName}</strong></div>
                  <div className="p-1 rounded-3 text-center">{mentor.phoneNumber}</div>
                  <div className="p-1 rounded-3 text-center">{mentor.email}</div>
                  <div className="p-1 rounded-3 text-center">{mentor.locations}</div>
                  <div className="p-1 rounded-3 text-center" style={{maxWidth: '210px'}}>Leadership, Strategy, Interview</div>
                  <button className="bg_yellow rounded-2 border-0 p-1 shadow">Approve</button>
                </div>
                )): null  }
                {/* <div className="box mentor shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-center mb-2">
                  <div className="p-1 rounded-2 text-center"><strong>Mentor Name</strong></div>
                  <div className="p-1 rounded-3 text-center">91 9526469580</div>
                  <div className="p-1 rounded-3 text-center">Irinjalakuda</div>
                  <div className="p-1 rounded-3 text-center">mentor@gmail.com</div>
                  <div className="p-1 rounded-3 text-center" style={{maxWidth: '210px'}}>Leadership, Strategy, Interview</div>
                  <button className="bg_yellow rounded-2 border-0 p-1 shadow">Approve</button>
                </div>
                <div className="box mentor shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-center mb-2">
                  <div className="p-1 rounded-2 text-center"><strong>Mentor Name</strong></div>
                  <div className="p-1 rounded-3 text-center">91 9526469580</div>
                  <div className="p-1 rounded-3 text-center">Irinjalakuda</div>
                  <div className="p-1 rounded-3 text-center">mentor@gmail.com</div>
                  <div className="p-1 rounded-3 text-center" style={{maxWidth: '210px'}}>Leadership, Strategy, Interview</div>
                  <button className="bg_yellow rounded-2 border-0 p-1 shadow">Approve</button>
                </div>
                <div className="box mentor shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-center mb-2">
                  <div className="p-1 rounded-2 text-center"><strong>Mentor Name</strong></div>
                  <div className="p-1 rounded-3 text-center">91 9526469580</div>
                  <div className="p-1 rounded-3 text-center">Irinjalakuda</div>
                  <div className="p-1 rounded-3 text-center">mentor@gmail.com</div>
                  <div className="p-1 rounded-3 text-center" style={{maxWidth: '210px'}}>Interview</div>
                  <button className="bg_yellow rounded-2 border-0 p-1 shadow">Approve</button>
                </div> */}
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      {/* section1 end */}
      <hr />
    </div> /* admin dashboard end */
  )

}

export default AdminDashboard
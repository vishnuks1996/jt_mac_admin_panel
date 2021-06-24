import React from 'react'
import { Link } from 'react-router-dom'

/**
* @author
* @function MentorList
**/

const MentorList = (props) => {
  return(
<div className=" page_padding"> {/*  page start */}
  {/* section1 starts */}
  <section className="section1 pb-5">
    <div className="title bg_green py-3 mb-5">
      <div className="container d-flex">
        <h3 className="text-white m-0"><strong>Select a Mentor</strong></h3>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 bg-light ">
              <img src="graphics/carousel01.jpg" className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">Mentor Name</h5>
                <p className="card-text mb-1 lh-1">This is a longer </p>
                <p className="card-text mb-1 lh-1">This is a longer </p>
                <p className="card-text mb-1 lh-1">This is a longer </p>
               <Link to={'/appointment'} ><button className="shadow border-0 float-end bg_yellow text-white btn_primary rounded-pill mt-2"> Select<i className="fas fa-chevron-right bg-white color_yellow" aria-hidden="true" /></button></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 bg-light ">
              <img src="graphics/carousel01.jpg" className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">Mentor Name</h5>
                <p className="card-text mb-1 lh-1">This is a longer </p>
                <p className="card-text mb-1 lh-1">This is a longer </p>
                <p className="card-text mb-1 lh-1">This is a longer </p>
                <Link to={'/appointment'} ><button className="shadow border-0 float-end bg_yellow text-white btn_primary rounded-pill mt-2"> Select<i className="fas fa-chevron-right bg-white color_yellow" aria-hidden="true" /></button></Link>
              </div>
            </div>
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

export default MentorList;
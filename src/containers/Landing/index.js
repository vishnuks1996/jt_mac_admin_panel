import React from 'react'
import './style.css';
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Layout from '../../components/Layout'

/**
* @author
* @function Landing
**/

const Landing = (props) => {
  return (
    <>

    <Layout />
    <div className="home_page page_padding"> {/* home page start */}
      {/* section1 starts */}
      <section className="section1 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-7 d-flex align-items-center justify-content-center">
              <div className="content1 text-left text-md-start py-4 py-md-0">
                <h1 className="color_green"><strong>Your Trusted Mentor</strong></h1>
                <h3 className="color_green"><strong>A guide for your Challenges</strong></h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.
                  </p>
                  <Link to={'/mentor_list'}><button className="shadow border-0 bg-white text_green bg-white btn_primary rounded-pill"> Book an appointment  <i className="fas fa-chevron-right bg_green2 text-white" /></button></Link>
                {/* <a href="appointment.html"><button className="shadow border-0 bg-white text_green bg-white btn_primary rounded-pill"> Book an appointment  <i className="fas fa-chevron-right bg_green2 text-white" /></button></a> */}
              </div>
            </div>
            <div className="col-md-5">
              <div className="content2 position-relative">
                <img src="images/dots.svg" className="dots" />

      <div id="carousel-home" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carousel-home" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carousel-home" data-bs-slide-to={1} aria-label="Slide 2" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/carousel01.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/carousel02.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
      </div>


                {/* <div className="owl-carousel carousel_1 d-none">
                  <div className="item"><img src="images/carousel01.jpg" alt="1" /></div>
                  <div className="item"><img src="images/carousel02.jpg" alt="1" /></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="gradient h-100 position-absolute d-none d-md-block" />
      </section>
      {/* section1 end */}
      {/* section2 starts */}
      <section className="section2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h3 className="text_green"><strong>Road to your future</strong></h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
            </div>
            
          </div>
        </div>
      </section>
      {/* section2 end */}
      {/* section3 starts */}
      <section className="section3 py-5 position-relative">
        <img src="images/dots.svg" className="dots1" />
        <div className="gradient position-absolute w-100 h-100" />
        <img src="images/dots.svg" className="dots2" />
        <div className="container ps-5 text-white">
          <div className="row">
            <div className="col-md-6">
              <div className="content d-flex">
                <img src="images/success.svg" />
                <div className="desc ms-2">
                  <h6 className="title">Strategising Success</h6>
                  <p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                    </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content d-flex">
                <img src="images/partner.svg" />
                <div className="desc ms-2">
                  <h6 className="title">Your Mentor Partner</h6>
                  <p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                    </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content d-flex">
                <img src="images/future.svg" />
                <div className="desc ms-2">
                  <h6 className="title">Road To Your Future</h6>
                  <p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                    </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content d-flex">
                <img src="images/life.svg" />
                <div className="desc ms-2">
                  <h6 className="title">Your Life Guide </h6>
                  <p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                    </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content d-flex">
                <img src="images/guid.svg" />
                <div className="desc ms-2">
                  <h6 className="title">Mentor, Counsellor and Guide</h6>
                  <p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                    </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content d-flex">
                <img src="images/pro.svg" />
                <div className="desc ms-2">
                  <h6 className="title">Your Professional Guide</h6>
                  <p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section3 end */}
      {/* section4 starts */}
      <section className="section4 py-5 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-7  d-flex align-items-center">
              <div className="content1">
                <h3 className="text_green"><strong>Are you struggling with these issues in your life?</strong></h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen
                    book.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="content2">
                <div className="row">
                  <div className="col-md-6 col-6 ">
                    <img src="images/student.png" className="w-100 shadow-sm mb-3" />
                    <img src="images/startup.png" className="w-100 shadow-sm mb-3" />
                  </div>
                  <div className="col-md-6 col-6 pt-5">
                    <img src="images/envi.png" className="w-100 shadow-sm mb-3" />
                    <img src="images/interview.png" className="w-100 shadow-sm mb-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section4 end */}
      {/* section5 starts */}
      <section className="section5 py-5 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h3 className="color_green mb-5"><strong><span>4</span> steps to your solution</strong></h3>
              <div className="content1 position-relative">
                <div className="d-flex align-items-center mb-4"><span className="bg_yellow text-white text-center shadow-sm me-3 d-none d-sm-block">1</span><h5>Book an audio or face to face session with JT</h5></div>
                <div className="d-flex align-items-center mb-4"><span className="bg_yellow text-white text-center shadow-sm me-3 d-none d-sm-block">2</span><h5>Choose date, location &amp; time slot</h5></div>
                <div className="d-flex align-items-center mb-4"><span className="bg_yellow text-white text-center shadow-sm me-3 d-none d-sm-block">3</span><h5>Fill the form</h5></div>
                <div className="d-flex align-items-center mb-4"><span className="bg_yellow text-white text-center shadow-sm me-3 d-none d-sm-block">4</span><h5>Payment</h5></div>
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-center">
              <div className="content2">
                <img src="images/steps.jpg" className="shadow w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section5 end */}
      {/* section6 starts */}
      <section className="section6 py-5 my-5 position-relative bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <div className="content1 d-flex align-items-center">
                <h2 className="d-none d-sm-block">"You have got to get what you deserve"</h2>
                <Link to={'/mentor_list'}><button className="ms-2 mb-3 mb-sm-0 shadow border-0 text-white bg_green2 btn_primary rounded-pill"> Book an appointment  <i className="fas fa-chevron-right bg-white color_green" /></button></Link>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="content2 bg-white p-3">
                <strong>Available Day and Time</strong>
                <small>
                  <ul className="m-0 p-0 pt-2">
                    <li>Monday - Friday 9:30 am - 5:30 pm</li>
                    <li>Saturday - Sunday 9:30 am - 3: 30 pm</li>
                  </ul>
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    </>
  )

}

export default Landing
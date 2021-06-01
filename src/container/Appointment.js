import react from 'react';

function Appointment()
{
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
                  <input type="number" className="form-control" id="phone" placeholder="+91 3232323232" />
                  <label htmlFor="phone">Mobile Number</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                  <label htmlFor="email">Email Address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="address" placeholder="Address" />
                  <label htmlFor="address">Address</label>
                </div>
                <div className="form-floating mb-3">
                  <select className="form-select" id="subject" aria-label="Subject / Issue">
                    <option selected>Select Subject / Issue</option>
                    <option value={1}>Student issue</option>
                    <option value={2}>Career issue</option>
                    <option value={3}>Corporate Government issues</option>
                    <option value={3}>Management issues</option>
                    <option value={3}>Start-up issues</option>
                    <option value={3}>Interview issue</option>
                    <option value={3}>Human Resource issues</option>
                    <option value={3}>Human Resource issues</option>
                    <option value={3}>Leadership issues</option>
                    <option value={3}>Strategy issues</option>
                  </select>
                  <label htmlFor="subject">Subject / Issue</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <select className="form-select" id="subject" aria-label="Choose Type">
                    <option selected>Choose Type</option>
                    <option value={1}>Face to Face</option>
                    <option value={2}>Audio Consultation</option>
                    <option value={3}>Video Consultation</option>
                  </select>
                  <label htmlFor="subject">Choose Type</label>
                </div>
                <div className="form-floating mb-3">
                  <select className="form-select" id="location" aria-label="Choose Location">
                    <option selected>Choose Location</option>
                    <option value={1}>Irinjalakuda</option>
                    <option value={2}>Ernakulam</option>
                    <option value={3}>Thrissur</option>
                  </select>
                  <label htmlFor="location">Choose Location</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea className="form-control" placeholder="Leave a comment here" id="comment" style={{height: '130px'}} defaultValue={""} />
                  <label htmlFor="comment">Special Needs / Comment</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="slot" placeholder="Choose Slot" readOnly />
                  <label htmlFor="slot">Choose Slot from below</label>
                  <div id="picker" />
                </div>
              </div>
              <a href="payment1.html" className="text-end"><button className="shadow border-0 bg_yellow text-white btn_primary rounded-pill"> Get Appointment
                  <i className="fas fa-chevron-right bg-white color_yellow" /></button></a>
            </div>
          </div>
        </section>
        {/* section1 end */ }
        <hr />
      </div> /* appointment page end */
    );
};
export default Appointment;
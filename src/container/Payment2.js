import react from 'react';

function Payment2()
{
    return(
        <div className="payment_page2 page_padding"> {/* payment page start */}
        {/* section1 starts */}
        <section className="section1 pb-5">
          <div className="title bg_green py-3 mb-5">
            <div className="container d-flex">
              <h3 className="text-white m-0"><strong>Payment Details</strong></h3>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="form-floating mb-2">
                  <input type="text" className="form-control" maxLength={13} id="phone" defaultValue={+91 } placeholder="+91 3232323232" />
                  <label htmlFor="phone">Enter Mobile Number</label>
                </div>
                <small className="text-secondary">OTP send to +91 9595959595</small>
                <button className="rounded-3 bg_green text-white border-0 py-1 px-3 float-end">Send OTP</button>
                <div className="form-floating mb-2 mt-4">
                  <input type="text" className="form-control text-center" id="otp" defaultValue placeholder="Enter OTP" />
                  <label htmlFor="otp" className="text-center w-100">Enter OTP</label>
                </div>
                <small className="text-secondary">Don't receive a code? <a href className="color_green">Resend OTP</a></small>
              </div>
            </div>
            <div className="row justify-content-center mt-3">
              <div className="col-md-6 text-end">
                <a href="appointment.html"><button className="shadow border-0 bg-white text_green bg-white btn_primary rounded-pill"> Cancel<i className="fas fa-times bg-secondary text-white" /></button></a>
                <a href="payment3.html" className><button className="shadow border-0 bg_yellow text-white btn_primary rounded-pill"> Confirm<i className="fas fa-chevron-right bg-white color_yellow" /></button></a>
              </div>
            </div>
          </div>
        </section>
        {/* section1 end */}
        <hr />
      </div> /* payment page end */
    );
};
export default Payment2;
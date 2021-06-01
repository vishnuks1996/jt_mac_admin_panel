import react from 'react';

function Payment1()
{
    return(
        <div className="payment_page1 page_padding"> {/* payment page start */}
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
                <div className="rounded-3 border p-3 mb-3">
                  <label>Choose a payment option</label><br />
                  <div className="form-check form-check-inline mt-3">
                    <input className="form-check-input" type="radio" name id="option1" defaultValue="option1" />
                    <label className="form-check-label" htmlFor="option1">Pay online</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name id="option2" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="option2">Pay later at clinic</label>
                  </div>
                </div>
                <div className="rounded-3 border p-3 mb-3">
                  <label>Choose a payment fee</label><br />
                  <div className="form-check form-check-inline mt-3">
                    <input className="form-check-input" type="radio" name id="fee1" defaultValue="option1" />
                    <label className="form-check-label" htmlFor="fee1">Face to face consultation <strong>1000+GST</strong></label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name id="fee2" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="fee2">Audio consultation <strong>1000+GST</strong></label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 text-end">
                <a href="appointment.html"><button className="shadow border-0 bg-white text_green bg-white btn_primary rounded-pill"> Cancel<i className="fas fa-times bg-secondary text-white" /></button></a>
                <a href="payment2.html" className><button className="shadow border-0 bg_yellow text-white btn_primary rounded-pill"> Get Appointment<i className="fas fa-chevron-right bg-white color_yellow" /></button></a>
              </div>
            </div>
          </div>
        </section>
        {/* section1 end */}
        <hr />
      </div> /* payment page end */
    );
};
export default Payment1;
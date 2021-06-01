import react from 'react';

function Configuration()
{
    return(
        <div className="configuration_page page_padding"> {/* config 1  page start */}
        {/* section1 starts */}
        <section className="section1 pb-5 ">
          <div className="title bg_green py-3 mb-5 position-relative">
            <nav className="navbar navbar-expand-sm">
              <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#admin-menu" aria-controls="admin-menu" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-ellipsis-v text-white" />
              </button>
              <div className="collapse navbar-collapse" id="admin-menu">
                <div className="container d-flex">
                  <h3 className="text-white m-0"><strong>Configuration</strong></h3>
                  <ul className="m-0 p-0 d-flex ms-auto">
                    <li><a href="admin-dashboard.html" className="text-white d-block py-2 ps-2 ms-2"><i className="fas fa-user-tie me-1" /> Admin</a></li>
                    <li><a href="configuration.html" className="text-white d-block py-2 ps-2 ms-2"><i className="fas fa-user-cog me-1" /> Configuration</a></li>
                    <li><a href="admin-login.html" className="text-white d-block py-2 ps-2 ms-2"><i className="fas fa-sign-out-alt me-1" /> Logout</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="container-fluid">
            <div className="content1 position-relative ">
              <div className="nav w-100 d-flex justify-content-center">
                <div className="bg_yellow rounded-3 p-3 mx-1 active" id="pills_slot_tab" data-bs-toggle="pill" data-bs-target="#pills_slot" role="tab" aria-controls="pills_slot" aria-selected="true">
                  <h6 className="m-0 position-relative text-white"><strong>SLOTS</strong></h6>
                </div>
                <div className="bg_yellow rounded-3 p-3 mx-1" id="pills_issue_tab" data-bs-toggle="pill" data-bs-target="#pills_issue" role="tab" aria-controls="pills_issue" aria-selected="false">
                  <h6 className="m-0 position-relative text-white"><strong>ISSUE TYPE</strong></h6>
                </div>
                <div className="bg_yellow rounded-3 p-3 mx-1" id="pills_price_tab" data-bs-toggle="pill" data-bs-target="#pills_price" role="tab" aria-controls="pills_price" aria-selected="false">
                  <h6 className="m-0 position-relative text-white"><strong>PRICE</strong></h6>
                </div>
              </div>
            </div>
            <div className="content2 position-relative p-3 bg-white shadow tab-content my-5 text-center rounded-3">
              <div className="tab-pane fade show active" id="pills_slot" role="tabpanel" aria-labelledby="pills_slot_tab">
                <div className="content">
                  <h6 className="mb-3"><strong>Add or modify Time, Date, and location</strong></h6>
                  <div className="data_wrap">
                    <div className="data d-flex justify-content-between bg_yellow rounded-3 align-items-center p-2 mb-2">
                      <div className="me-2">Time: <span>11 am-12 pm</span></div><div className="me-2">Date: <span>11-06-2021</span></div><div className="me-2">Location: <span>Thrissur</span></div>
                      <div>
                        <button className="mx-2 p-0 btn_primary border-0 rounded-2 text-white bg_green2"><i className="far fa-edit m-0" /></button>
                        <button className="btn_delete p-0 btn_primary border-0 rounded-2 text-white bg-danger"><i className="far fa-trash-alt m-0" /></button>
                      </div>
                    </div>
                    <div className="data d-flex justify-content-between bg_yellow rounded-3 align-items-center p-2 mb-2">
                      <div className="me-2">Time: <span>11 am-12 pm</span></div><div className="me-2">Date: <span>11-06-2021</span></div><div className="me-2">Location: <span>Thrissur</span></div>
                      <div>
                        <button className="mx-2 p-0 btn_primary border-0 rounded-2 text-white bg_green2"><i className="far fa-edit m-0" /></button>
                        <button className="btn_delete p-0 btn_primary border-0 rounded-2 text-white bg-danger"><i className="far fa-trash-alt m-0" /></button>
                      </div>
                    </div>
                  </div>
                  <div className="controls bg-light d-flex justify-content-between align-items-center mt-3 p-2 rounded-2">
                    <div className="form-floating mx-2 ">
                      <input type="time" className="form-control" id="time" placeholder="11:00 am - 12:30 pm" />
                      <label htmlFor="time">Time</label>
                    </div>
                    <div className="form-floating mx-2">
                      <input type="date" className="form-control" id="date" placeholder="12-06-2021" />
                      <label htmlFor="date">Date</label>
                    </div>
                    <div className="form-floating mx-2">
                      <input type="text" className="form-control" id="location" placeholder="Thrissur" />
                      <label htmlFor="location">Location</label>
                    </div>
                    <button onclick="add_slot()" className="mx-2 shadow border-0  bg_yellow btn_primary rounded-pill"> Add Slot <i className="fas fa-plus bg-white" aria-hidden="true" /></button>
                  </div>
                  <button className="mt-3 shadow border-0 text-white bg_green2 btn_primary rounded-pill"> Save Changes <i className="fas fa-cloud-upload-alt bg-white color_green" aria-hidden="true" /></button>
                </div>
              </div>
              <div className="tab-pane fade" id="pills_issue" role="tabpanel" aria-labelledby="pills_issue_tab">
                <div className="content">
                  <h6 className="mb-3"><strong>Add or modify Issue Type</strong></h6>
                  <div className="data_wrap">
                    <div className="data d-flex justify-content-between bg_yellow rounded-3 align-items-center p-2 mb-2">
                      <div className="me-2">Student issue</div>
                      <div>
                        <button className="mx-2 p-0 btn_primary border-0 rounded-2 text-white bg_green2"><i className="far fa-edit m-0" /></button>
                        <button className="btn_delete p-0 btn_primary border-0 rounded-2 text-white bg-danger"><i className="far fa-trash-alt m-0" /></button>
                      </div>
                    </div>
                    <div className="data d-flex justify-content-between bg_yellow rounded-3 align-items-center p-2 mb-2">
                      <div className="me-2">Career issue</div>
                      <div>
                        <button className="mx-2 p-0 btn_primary border-0 rounded-2 text-white bg_green2"><i className="far fa-edit m-0" /></button>
                        <button className="btn_delete p-0 btn_primary border-0 rounded-2 text-white bg-danger"><i className="far fa-trash-alt m-0" /></button>
                      </div>
                    </div>
                    <div className="data d-flex justify-content-between bg_yellow rounded-3 align-items-center p-2 mb-2">
                      <div className="me-2">Corporate issue</div>
                      <div>
                        <button className="mx-2 p-0 btn_primary border-0 rounded-2 text-white bg_green2"><i className="far fa-edit m-0" /></button>
                        <button className="btn_delete p-0 btn_primary border-0 rounded-2 text-white bg-danger"><i className="far fa-trash-alt m-0" /></button>
                      </div>
                    </div>
                  </div>
                  <div className="controls bg-light d-flex justify-content-between align-items-center mt-3 p-2 rounded-2">
                    <div className="form-floating mx-2">
                      <input type="text" className="form-control" id="issue" placeholder="Student issue" />
                      <label htmlFor="issue">Add Issue</label>
                    </div>
                    <button onclick="add_issue()" className="mx-2 shadow border-0  bg_yellow btn_primary rounded-pill"> Add Issue <i className="fas fa-plus bg-white" aria-hidden="true" /></button>
                  </div>
                  <button className="mt-3 shadow border-0 text-white bg_green2 btn_primary rounded-pill"> Save Changes <i className="fas fa-cloud-upload-alt bg-white color_green" aria-hidden="true" /></button>
                </div>
              </div>
              <div className="tab-pane fade" id="pills_price" role="tabpanel" aria-labelledby="pills_price_tab">
                <div className="content">
                  <h6 className="mb-3"><strong>Type of consultation</strong></h6>
                  <div className="data_wrap">
                    <div className="data d-flex justify-content-between bg_yellow rounded-3 align-items-center p-2 mb-2">
                      <div className="me-2">Face to Face</div><div className="me-2">1000 + GST</div>
                      <div>
                        <button className="mx-2 p-0 btn_primary border-0 rounded-2 text-white bg_green2"><i className="far fa-edit m-0" /></button>
                        <button className="btn_delete p-0 btn_primary border-0 rounded-2 text-white bg-danger"><i className="far fa-trash-alt m-0" /></button>
                      </div>
                    </div>
                    <div className="data d-flex justify-content-between bg_yellow rounded-3 align-items-center p-2 mb-2">
                      <div className="me-2">Audio</div><div className="me-2">1000 + GST</div>
                      <div>
                        <button className="mx-2 p-0 btn_primary border-0 rounded-2 text-white bg_green2"><i className="far fa-edit m-0" /></button>
                        <button className="btn_delete p-0 btn_primary border-0 rounded-2 text-white bg-danger"><i className="far fa-trash-alt m-0" /></button>
                      </div>
                    </div>
                  </div>
                  <div className="controls bg-light d-flex justify-content-between align-items-center mt-3 p-2 rounded-2">
                    
                      <label>Face to Face</label>
                    
                    <div className="form-floating mx-2">
                      <input type="text" className="form-control" id="price" placeholder="Add Price" />
                      <label htmlFor="price">Add Price</label>
                    </div>
                    <button onclick="add_price()" className="mx-2 shadow border-0  bg_yellow btn_primary rounded-pill"> Update Price <i className="fas fa-plus bg-white" aria-hidden="true" /></button>
                  </div>
                  <button className="mt-3 shadow border-0 text-white bg_green2 btn_primary rounded-pill"> Save Changes <i className="fas fa-cloud-upload-alt bg-white color_green" aria-hidden="true" /></button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section1 end */}
        <hr />
      </div> /* config 1 end */

    );
};
export default Configuration;